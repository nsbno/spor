terraform {
  required_version = "1.8.4"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "5.54.1"
    }
    vy = {
      source  = "nsbno/vy"
      version = "0.4.0"
    }
  }

  backend "s3" {
    key            = "spor/main.tfstate"
    bucket         = "590183702222-terraform-state"
    dynamodb_table = "590183702222-terraform-state"
    acl            = "bucket-owner-full-control"
    encrypt        = "true"
    region         = "eu-west-1"
  }
}

provider "aws" {
  allowed_account_ids = ["590183702222"]
  default_tags {
    tags = {
      repo        = local.application_name
      application = local.application_name
      terraform   = true
    }
  }
  region = "eu-west-1"
}

provider "vy" {
  environment = local.environment
}

locals {
  application_name = "spor"
  environment      = "test"
}

module "app" {
  source           = "../template"
  application_name = local.application_name
  environment      = local.environment
  custom_sub_domain = "spor-v1"
}
