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
  region              = "eu-central-1"
  allowed_account_ids = ["635004941268"]
}

locals {
  application_name = "spor"
}

data "aws_caller_identity" "current" {}

module "ecr" {
  source      = "github.com/nsbno/terraform-aws-ecr?ref=71ca5e2"
  name_prefix = local.application_name

  max_images_retained = 10

  trusted_accounts = [
    data.aws_caller_identity.current.account_id
  ]

  tags = {
    environment = "prod"
    application = "spor"
    terraform   = "True"
  }
}
