locals {
  application_name = "digitalekanaler-designmanual"
  base_domain      = var.environment == "prod" ? "vy.no" : "${var.environment}.vy.no"
  domain_name      = var.environment == "prod" ? "design.vy.no" : "${var.environment}.design.vy.no"

  alb_domain_name       = var.environment == "prod" ? "lb.vylabs.io" : "lb.${var.environment}.vylabs.io"
  alb_listener_arn      = nonsensitive(data.aws_ssm_parameter.alb_listener_arn.value)
  alb_test_listener_arn = nonsensitive(data.aws_ssm_parameter.alb_test_listener_arn.value)
  alb_security_group_id = nonsensitive(data.aws_ssm_parameter.alb_security_group_id.value)
}

module "metadata" {
  source = "github.com/nsbno/terraform-aws-account-metadata?ref=0.5.0"

  load_balancer = false
  dns           = false
}

data "aws_caller_identity" "this" {}

##############################
#                            #
# SSR Task                   #
#                            #
############################## 

data "aws_ecs_cluster" "cluster" {
  cluster_name = var.environment == "prod" ? "common-services-cluster" : "common-services-spot-cluster"
}

data "aws_vpc" "shared" {
  tags = {
    Name = "shared"
  }
}

data "aws_subnets" "private" {
  filter {
    name   = "vpc-id"
    values = [data.aws_vpc.shared.id]
  }

  tags = {
    Tier = "Private"
  }
}

data "aws_ecr_repository" "this" {
  name        = "designmanual"
  registry_id = "637423315721" # service account for digital-common-services
}

module "ssr_task" {
  source             = "github.com/nsbno/terraform-aws-ecs-service?ref=3.0.0-rc9"
  service_name       = local.application_name
  vpc_id             = data.aws_vpc.shared.id
  private_subnet_ids = data.aws_subnets.private.ids
  use_spot           = var.environment != "prod"

  cluster_id = data.aws_ecs_cluster.cluster.id

  rollback_window_in_minutes        = var.environment != "prod" ? 0 : 10
  deployment_configuration_strategy = var.environment != "prod" ? "ROLLING" : "BLUE_GREEN"

  application_container = {
    name           = "${local.application_name}-main"
    repository_url = data.aws_ecr_repository.this.repository_url
    protocol       = "HTTP"
    port           = 3000

    environment = {
      VITE_ENVIRONMENT = var.environment
    }
  }

  lb_health_check = {
    port = 3000
    path = "/health"
  }

  lb_listeners = [
    {
      listener_arn      = local.alb_listener_arn
      test_listener_arn = local.alb_test_listener_arn
      security_group_id = local.alb_security_group_id
      conditions = [
        {
          host_header = [local.domain_name, aws_route53_zone.this.name]
        }
      ]
    }
  ]
}

################################
#                              #
# Cloudfront + S3 static files #
#                              # 
################################

# Hosted zone for design system domains
resource "aws_route53_zone" "this" {
  name = var.environment == "prod" ? "design.vy.no" : "${var.environment}.design.vy.no"

  tags = {
    Environment = var.environment
    Application = local.application_name
  }
}

# NS records for stage and test in prod (manually copied from stage/test hosted zone)
resource "aws_route53_record" "stage_ns" {
  count   = var.environment == "prod" ? 1 : 0
  zone_id = aws_route53_zone.this.zone_id
  name    = "stage.${aws_route53_zone.this.name}"
  type    = "NS"
  ttl     = 3600
  records = ["ns-733.awsdns-27.net", "ns-160.awsdns-20.com", "ns-1704.awsdns-21.co.uk", "ns-1366.awsdns-42.org"]
}

resource "aws_route53_record" "test_ns" {
  count   = var.environment == "prod" ? 1 : 0
  zone_id = aws_route53_zone.this.zone_id
  name    = "test.${aws_route53_zone.this.name}"
  type    = "NS"
  ttl     = 3600
  records = ["ns-895.awsdns-47.net", "ns-484.awsdns-60.com", "ns-1668.awsdns-16.co.uk", "ns-1352.awsdns-41.org"]
}

module "cloudfront_ssr" {
  source = "github.com/nsbno/terraform-aws-ssr-site?ref=1.0.0"

  providers = {
    aws           = aws
    aws.us_east_1 = aws.us_east_1
  }

  enable_wildcard_domain        = var.environment == "test" ? true : false
  preview_url_mapper_lambda_arn = var.environment == "test" ? module.preview_url[0].lambda_function_qualifier_arn : ""

  service_name            = local.application_name
  domain_name             = local.domain_name
  additional_domain_names = [aws_route53_zone.this.name]
  alb_domain_name         = local.alb_domain_name

  route53_hosted_zone_id = aws_route53_zone.this.zone_id
}

################################
#                              #
# Cloudfront                   #
#                              #
################################

module "preview_url" {
  count  = var.environment == "test" ? 1 : 0
  source = "github.com/nsbno/terraform-aws-preview-url?ref=31c02b8"

  providers = {
    aws.us_east_1 = aws.us_east_1
  }

  service_name = local.application_name
}

