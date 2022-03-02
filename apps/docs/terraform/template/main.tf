locals {
  image_tag = "latest"
}

data "aws_caller_identity" "current" {}

##################################
#                                #
# ECR and access role            #
#                                #
##################################

module "ecr" {
  source      = "github.com/nsbno/terraform-aws-ecr?ref=71ca5e2"
  name_prefix = "${var.name_prefix}-${var.application_name}"

  max_images_retained = 10

  trusted_accounts = [
    data.aws_caller_identity.current.account_id
  ]

  tags = var.tags
}

resource "aws_iam_role" "ecr_access_role" {
  name               = "${var.name_prefix}-${var.application_name}-access-role"
  assume_role_policy = data.aws_iam_policy_document.trust_policy.json
}

data "aws_iam_policy_document" "trust_policy" {
  statement {
    principals {
      type        = "Service"
      identifiers = ["build.apprunner.amazonaws.com"]
    }
    actions = ["sts:AssumeRole"]
  }
}

data "aws_iam_policy_document" "access_policy" {
  statement {
    actions = [
      "ecr:GetDownloadUrlForLayer",
      "ecr:BatchCheckLayerAvailability",
      "ecr:BatchGetImage",
      "ecr:DescribeImages",
    ]
    resources = [module.ecr.arn]
  }
  statement {
    actions = [
      "ecr:GetAuthorizationToken"
    ]
    resources = ["*"]
  }
}

resource "aws_iam_policy" "access_policy" {
  name   = "${var.name_prefix}-${var.application_name}-access-policy"
  path   = "/"
  policy = data.aws_iam_policy_document.access_policy.json
}

resource "aws_iam_role_policy_attachment" "access_role_policy_attachment" {
  role       = aws_iam_role.ecr_access_role.name
  policy_arn = aws_iam_policy.access_policy.arn
}


##################################
#                                #
# Application KMS key            #
#                                #
##################################

resource "aws_kms_key" "application_key" {
  description = "Key for ${var.name_prefix}-${var.application_name}"
}

resource "aws_kms_alias" "application_key_alias" {
  name          = "alias/${var.name_prefix}-${var.application_name}-new"
  target_key_id = aws_kms_key.application_key.id
}

##################################
#                                #
# Application config             #
# in parameter store             #
#                                #
##################################

resource "aws_ssm_parameter" "cms_api_key" {
  name   = "/config/${var.application_name}/cms_api_key"
  type   = "SecureString"
  value  = "null"
  key_id = aws_kms_key.application_key.id

  lifecycle {
    ignore_changes = [value]
  }
}

##################################
#                                #
# App Runner resources           #
#                                #
##################################

resource "aws_apprunner_service" "service" {
  service_name = "${var.name_prefix}-${var.application_name}"

  source_configuration {
    authentication_configuration {
      access_role_arn = aws_iam_role.ecr_access_role.arn
    }
    image_repository {
      image_configuration {
        port = "3000"
        runtime_environment_variables = {
          SESSION_SECRET = random_string.session_secret.result
          CMS_API_KEY    = aws_ssm_parameter.cms_api_key.value
        }
      }
      image_identifier      = "${module.ecr.url}:${local.image_tag}"
      image_repository_type = "ECR"
    }
    auto_deployments_enabled = true
  }

  auto_scaling_configuration_arn = aws_apprunner_auto_scaling_configuration_version.autoscaling.arn

  tags = var.tags
}

resource "aws_apprunner_auto_scaling_configuration_version" "autoscaling" {
  auto_scaling_configuration_name = "limited-scaling"
  max_concurrency                 = 100
  min_size                        = 1
  max_size                        = 2

  tags = var.tags
}

resource "random_string" "session_secret" {
  length  = 32
  special = false
}

##################################
#                                #
# Custom domain name             #
# and TLS validation records     #
#                                #
##################################

resource "aws_apprunner_custom_domain_association" "service" {
  domain_name          = aws_route53_record.record.name
  service_arn          = aws_apprunner_service.service.arn
  enable_www_subdomain = false
}

data "aws_route53_zone" "zone" {
  name = "cloud.vy.no"
}

resource "aws_route53_record" "record" {
  zone_id = data.aws_route53_zone.zone.zone_id
  name    = "${var.application_name}.${data.aws_route53_zone.zone.name}"
  type    = "CNAME"
  ttl     = 7200
  records = [aws_apprunner_service.service.service_url]
}

resource "aws_route53_record" "validation" {
  for_each = { for record in aws_apprunner_custom_domain_association.service.certificate_validation_records : record.name => record }

  name = each.value.name
  records = [
    each.value.value
  ]
  ttl     = 3600
  type    = each.value.type
  zone_id = data.aws_route53_zone.zone.zone_id
}
