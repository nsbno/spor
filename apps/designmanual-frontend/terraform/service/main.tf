locals {
  service_account_id = "637423315721"
  test_account_id    = "590183702222"
  prod_account_id    = "471112960535"
  stage_account_id    = "339713113237"
}

module "ecr" {
  source    = "github.com/nsbno/terraform-aws-ecr?ref=2.1.0"
  repo_name = "designmanual"

  trusted_accounts = [
    local.service_account_id,
    local.test_account_id,
    local.prod_account_id
  ]
}
