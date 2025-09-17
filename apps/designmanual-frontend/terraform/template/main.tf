locals {
  application_name = "digitalekanaler-admin"
  base_domain      = var.environment == "prod" ? "vylabs.io" : "${var.environment}.vylabs.io"
  domain_name      = "admin.${local.base_domain}"

  alb_domain_name       = "lb.${local.base_domain}"
  alb_listener_arn      = nonsensitive(data.aws_ssm_parameter.alb_listener_arn.value)
  alb_test_listener_arn = nonsensitive(data.aws_ssm_parameter.alb_test_listener_arn.value)
  alb_security_group_id = nonsensitive(data.aws_ssm_parameter.alb_security_group_id.value)

  auth_url             = "https://${local.domain_name}/api/auth"
  cognito_user_pool_id = module.metadata.shared_cognito_user_pool_mapping["prod"]

  dynamic_env_vars = var.environment == "test" ? {
    AUTH_REDIRECT_PROXY_URL = local.auth_url
  } : {}
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

    environment = merge({
      COGNITO_DOMAIN     = "https://auth.cognito.vydev.io"
      COGNITO_ISSUER_URL = "https://cognito-idp.eu-west-1.amazonaws.com/${local.cognito_user_pool_id}"
      AUTH_URL           = local.auth_url
      ENVIRONMENT        = var.environment
      DDB_TABLE          = aws_dynamodb_table.auth_sessions.name
    }, local.dynamic_env_vars)
    secrets = {
      COGNITO_CLIENT_SECRET = vy_app_client.client.client_secret
      COGNITO_CLIENT_ID     = vy_app_client.client.client_id
      AUTH_SECRET           = random_password.session_secret.result
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
  source = "./s3_static_files"

  application_name           = local.application_name
  cloudfront_distribution_id = module.cloudfront_ssr.cloudfront_distribution_id
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
  source = "github.com/nsbno/terraform-aws-ssr-site?ref=0.6.0"

  providers = {
    aws           = aws
    aws.us_east_1 = aws.us_east_1
  }

  enable_wildcard_domain        = var.environment == "test" ? true : false
  preview_url_mapper_lambda_arn = var.environment == "test" ? module.preview_url[0].lambda_function_qualifier_arn : ""

  service_name            = local.application_name
  domain_name             = local.domain_name
  additional_domain_names = ["digitalekanaler-admin.${local.base_domain}"]
  alb_domain_name         = local.alb_domain_name

  route53_hosted_zone_id = data.aws_route53_zone.parent.zone_id

  s3_bucket_id = module.s3_website_bucket.bucket_name
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

################################
#                              #
# Cognito client for SSO login #
#                              #
################################

data "vy_cognito_info" "this" {}

resource "vy_app_client" "client" {
  name = "${data.aws_caller_identity.this.account_id}-${local.application_name}"
  type = "frontend"

  generate_secret = true
  callback_urls = [
    "http://localhost:7304/api/auth/callback/cognito",
    "https://${local.domain_name}/api/auth/callback/cognito",
  ]
  logout_urls = [
    "http://localhost:7304/logout",
    "https://${local.domain_name}/logout",
  ]

  scopes = [
    "email",
    "openid",
    "profile",
  ]
}

resource "aws_dynamodb_table" "auth_sessions" {
  name         = "${local.application_name}-auth-sessions"
  billing_mode = "PAY_PER_REQUEST"
  hash_key     = "pk"
  range_key    = "sk"

  attribute {
    name = "pk"
    type = "S"
  }

  attribute {
    name = "sk"
    type = "S"
  }

  attribute {
    name = "GSI1PK"
    type = "S"
  }

  attribute {
    name = "GSI1SK"
    type = "S"
  }

  global_secondary_index {
    hash_key        = "GSI1PK"
    name            = "GSI1"
    projection_type = "ALL"
    range_key       = "GSI1SK"
  }

  ttl {
    attribute_name = "expires"
    enabled        = true
  }
}

module "permissions_ssr_task" {
  source = "github.com/nsbno/terraform-aws-service-permissions?ref=1.2.0"

  for_each = toset(compact([
    var.environment == "test" ? module.preview_url[0].preview_instance_iam_role_name : null,
    module.ssr_task.task_role_name
  ]))

  role_name = each.value

  dynamodb_tables = [
    {
      arns        = [aws_dynamodb_table.auth_sessions.arn, "${aws_dynamodb_table.auth_sessions.arn}/*"]
      permissions = ["put", "get", "delete"]
    }
  ]
}

resource "random_password" "session_secret" {
  length  = 32
  special = true
}

#################################
#                               #
# Redirect old Admin URL to new #
#                               #
#################################

resource "aws_lb_listener_rule" "redirect_admin" {
  listener_arn = local.alb_listener_arn

  action {
    type = "redirect"

    redirect {
      port        = "443"
      protocol    = "HTTPS"
      status_code = "HTTP_301"
      host        = "admin.${local.base_domain}"
    }
  }

  condition {
    host_header {
      values = ["digitalekanaler-admin.${local.base_domain}"]
    }
  }
}
