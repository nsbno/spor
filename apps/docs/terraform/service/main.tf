terraform {
  backend "s3" {
    key            = "spor/terraform.tfstate"
    bucket         = "637423315721-terraform-state"
    dynamodb_table = "637423315721-terraform-state"
    acl            = "bucket-owner-full-control"
    encrypt        = "true"
    region         = "eu-west-1"
  }
}

locals {
  ecr_repository_name = "spor"
  service_account     = "637423315721"
  prod_account        = "471112960535"
}

module "ecr" {
  source              = "github.com/nsbno/terraform-aws-ecr?ref=1.4.1"
  name_prefix         = local.ecr_repository_name
  trusted_accounts    = [local.prod_account, local.service_account]
  max_images_retained = 10
}
