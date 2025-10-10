terraform {
  required_version = "1.13.0"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "6.0.0"
    }
  }
    backend "s3" {
    bucket         = "637423315721-terraform-state"
    key            = "digitalekanaler-designmanual-frontend/main.tfstate"
    acl            = "bucket-owner-full-control"
    region         = "eu-west-1"
    encrypt        = true
    dynamodb_table = "637423315721-terraform-state"
  }
}

provider "aws" {
  default_tags {
    tags = {
      repo        = "digitalekanaler-designmanual-frontend"
      application = "digitalekanaler-designmanual"
      terraform   = true
    }
  }
  region = "eu-west-1"
  allowed_account_ids = ["637423315721"]
}
