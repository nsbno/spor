terraform {
  backend "s3" {
    key            = "digitalekanaler-designmanual-frontend/terraform.tfstate"
    bucket         = "339713113237-terraform-state"
    dynamodb_table = "339713113237-terraform-state"
    acl            = "bucket-owner-full-control"
    encrypt        = "true"
    region         = "eu-west-1"
  }
}

module "app" {
  source      = "../template"
  environment = "stage"
}
