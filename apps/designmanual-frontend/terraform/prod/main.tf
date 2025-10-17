terraform {
  backend "s3" {
    key            = "digitalekanaler-designmanual-frontend/terraform.tfstate"
    bucket         = "471112960535-terraform-state"
    dynamodb_table = "471112960535-terraform-state"
    acl            = "bucket-owner-full-control"
    encrypt        = "true"
    region         = "eu-west-1"
  }
}

module "app" {
  source      = "../template"
  environment = "prod"

  environment_variables = {
    VITE_ENVIRONMENT = "prod"
  }
}
