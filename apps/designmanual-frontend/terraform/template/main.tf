locals {
  application_name = "digitalekanaler-designmanual"
  base_domain      = var.environment == "prod" ? "vylabs.io" : "${var.environment}.vylabs.io"
  domain_name      = "designmanual.${local.base_domain}"

  alb_domain_name       = "lb.${local.base_domain}"
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
  name        = local.application_name
  registry_id = "637423315721" # service account for digital-common-services
}

module "ssr_task" {
  source             = "github.com/nsbno/terraform-aws-ecs-service?ref=3.0.0-rc1"
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
          host_header = [local.domain_name]
        }
      ]
    }
  ]
}

##############################
#                            #
# Static files               #
#                            #
############################## 

module "s3_website_bucket" {
  source = "github.com/nsbno/terraform-aws-ssr-site//modules/s3_static_files?ref=0.7.0"

  service_name               = local.application_name
}

################################
#                              #
# Cloudfront                   #
#                              # 
################################

data "aws_route53_zone" "parent" {
  name = local.base_domain
}

module "cloudfront_ssr" {
  source = "github.com/nsbno/terraform-aws-ssr-site?ref=0.7.0"

  providers = {
    aws           = aws
    aws.us_east_1 = aws.us_east_1
  }

  enable_wildcard_domain        = var.environment == "test" ? true : false
  preview_url_mapper_lambda_arn = var.environment == "test" ? module.preview_url[0].lambda_function_qualifier_arn : ""

  service_name            = local.application_name
  domain_name             = local.domain_name
  alb_domain_name         = local.alb_domain_name

  route53_hosted_zone_id = data.aws_route53_zone.parent.zone_id

  s3_bucket_id = module.s3_website_bucket.bucket_id
}

################################
#                              #
# Cloudfront                   #
#                              #
################################

module "preview_url" {
  count  = var.environment == "test" ? 1 : 0
  source = "github.com/nsbno/terraform-aws-preview-url?ref=0.3.0"

  providers = {
    aws.us_east_1 = aws.us_east_1
  }

  service_name = local.application_name
}

