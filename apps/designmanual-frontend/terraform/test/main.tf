terraform {
  backend "s3" {
    key            = "digitalekanaler-designmanual-frontend/terraform.tfstate"
    bucket         = "590183702222-terraform-state"
    dynamodb_table = "590183702222-terraform-state"
    acl            = "bucket-owner-full-control"
    encrypt        = "true"
    region         = "eu-west-1"
  }
}

module "app" {
  source      = "../template"
  environment = "test"
}
