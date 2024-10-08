##################################
#                                #
# Application KMS key            #
#                                #
##################################
resource "aws_kms_key" "application_key" {
  description = "Key for ${var.application_name}"
}

##################################
#                                #
# Application config             #
# in parameter store             #
#                                #
##################################
resource "aws_ssm_parameter" "sanity_preview_api_token" {
  name   = "/config/${var.application_name}/sanity_preview_api_token"
  type   = "SecureString"
  value  = "null"
  key_id = aws_kms_key.application_key.id

  lifecycle {
    ignore_changes = [value]
  }
}

resource "aws_ssm_parameter" "sanity_preview_secret" {
  name   = "/config/${var.application_name}/sanity_preview_secret"
  type   = "SecureString"
  value  = "null"
  key_id = aws_kms_key.application_key.id

  lifecycle {
    ignore_changes = [value]
  }
}

##################################
#                                #
# App Runner service             #
#                                #
##################################
module "app_runner" {
  source                = "github.com/nsbno/terraform-digitalekanaler-apprunner-internal?ref=1.0.0"
  application_port      = 3000
  application_name      = var.application_name
  ecr_repository_name   = var.application_name
  service_account_id    = "637423315721"
  environment           = var.environment
  environment_secrets = {
    SANITY_PREVIEW_API_TOKEN = aws_ssm_parameter.sanity_preview_api_token.arn
    SANITY_PREVIEW_SECRET    = aws_ssm_parameter.sanity_preview_secret.arn
  }
}

resource "aws_security_group_rule" "allow_all_outgoing_traffic_from_apprunner" {
  security_group_id = module.app_runner.security_group_id
  type              = "egress"
  from_port         = 0
  to_port           = 0
  protocol          = "-1"
  cidr_blocks = ["0.0.0.0/0"]
}

##################################
#                                #
# App Runner task policy         #
#                                #
##################################
data "aws_iam_policy_document" "task_policy" {
  statement {
    actions = ["ssm:GetParameters"]

    resources = [
      aws_ssm_parameter.sanity_preview_api_token.arn,
      aws_ssm_parameter.sanity_preview_secret.arn,
    ]
  }
  statement {
    actions = ["kms:Decrypt"]

    resources = [
      aws_kms_key.application_key.arn
    ]
  }
}

resource "aws_iam_policy" "task_policy" {
  name   = "${var.application_name}-task-policy"
  path   = "/"
  policy = data.aws_iam_policy_document.task_policy.json
}

resource "aws_iam_role_policy_attachment" "task_role_policy_attachment" {
  role       = module.app_runner.task_role_name
  policy_arn = aws_iam_policy.task_policy.arn
}
