terraform {
  required_version = ">= 1.13.0"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 6.4.0"
    }
    vy = {
      source  = "nsbno/vy"
      version = "0.4.0"
    }
    random = {
      source  = "hashicorp/random"
      version = "~> 3.1"
    }
  }
}

provider "aws" {
  default_tags {
    tags = {
      repo        = "spor"
      application = local.application_name
      terraform   = true
    }
  }
  region = "eu-west-1"
}

provider "aws" {
  default_tags {
    tags = {
      repo        = "spor"
      application = local.application_name
      terraform   = true
    }
  }
  alias  = "us_east_1"
  region = "us-east-1"
}

provider "vy" {
  environment = "prod"
}
