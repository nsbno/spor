terraform {
  required_version = "1.0.8"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "3.65.0"
    }
  }

  backend "s3" {
    key            = "spor/prod/main.tfstate"
    bucket         = "635004941268-terraform-state"
    dynamodb_table = "635004941268-terraform-state"
    acl            = "bucket-owner-full-control"
    encrypt        = "true"
    kms_key_id     = "arn:aws:kms:eu-central-1:635004941268:alias/635004941268-terraform-state-encryption-key"
    region         = "eu-central-1"
  }
}

provider "aws" {
  region              = "eu-west-1"
  allowed_account_ids = ["635004941268"]
}

locals {
  name_prefix      = "digitalekanaler"
  application_name = "spor"
}

module "app" {
  source           = "../template"
  name_prefix      = local.name_prefix
  application_name = local.application_name

  tags = {
    environment = "prod"
    application = local.application_name
    terraform   = "True"
  }
}
