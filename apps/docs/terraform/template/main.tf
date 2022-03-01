data "aws_caller_identity" "current" {}

module "ecr" {
  source      = "github.com/nsbno/terraform-aws-ecr?ref=71ca5e2"
  name_prefix = "${var.name_prefix}-${var.application_name}"

  max_images_retained = 10

  trusted_accounts = [
    data.aws_caller_identity.current.account_id
  ]

  tags = var.tags
}

resource "random_string" "session_secret" {
  length  = 32
  special = false
}

resource "aws_apprunner_service" "service" {
  service_name = "${var.name_prefix}-${var.application_name}"

  source_configuration {
    image_repository {
      image_configuration {
        port = "3000"
        runtime_environment_variables = {
          SESSION_SECRET = random_string.session_secret.result
        }
      }
      image_identifier      = module.ecr.url
      image_repository_type = "ECR"
    }
  }

  tags = var.tags
}

#resource "aws_apprunner_custom_domain_association" "service" {
#  domain_name = ""
#  service_arn = aws_apprunner_service.service.arn
#}

#data "aws_route53_zone" "zone" {
#  name = "cloud.vy.no"
#}

#resource "aws_route53_record" "environment_route53_record" {
#  zone_id        = data.aws_route53_zone.route53_zone.zone_id
#  name           = "${var.application_name}.${data.aws_route53_zone.zone.name}"
#  type           = "CNAME"
#  ttl            = 7200
#  records        = [var.route53_record]
#}
