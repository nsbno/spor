locals {
  service_account_id = "637423315721"
}

data "aws_ssm_parameter" "alb_listener_arn" {
  name = "/config/shared/vylabs/alb_listener_arn"
}

data "aws_ssm_parameter" "alb_test_listener_arn" {
  name = "/config/shared/vylabs/alb_test_listener_arn"
}

data "aws_ssm_parameter" "alb_security_group_id" {
  name = "/config/shared/vylabs/alb_security_group_id"
}
