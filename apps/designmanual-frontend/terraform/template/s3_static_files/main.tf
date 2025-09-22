resource "aws_s3_bucket" "website_bucket" {
  bucket = "${data.aws_caller_identity.this.account_id}-${var.application_name}-static-files"
}

resource "aws_s3_bucket_ownership_controls" "website_bucket" {
  bucket = aws_s3_bucket.website_bucket.id
  rule {
    object_ownership = "BucketOwnerPreferred"
  }
}

resource "aws_s3_bucket_public_access_block" "website_bucket" {
  bucket = aws_s3_bucket.website_bucket.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

resource "aws_s3_bucket_policy" "website_bucket" {
  bucket = aws_s3_bucket.website_bucket.id
  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid    = "AllowCloudFrontOACRead"
        Effect = "Allow"
        Principal = {
          Service = "cloudfront.amazonaws.com"
        }
        Condition = {
          StringEquals = {
            "AWS:SourceArn" = "arn:aws:cloudfront::${data.aws_caller_identity.this.account_id}:distribution/${var.cloudfront_distribution_id}"
          }
        }
        Action   = "s3:GetObject"
        Resource = "arn:aws:s3:::${aws_s3_bucket.website_bucket.id}/*"
      }
    ]
  })
  depends_on = [
    aws_s3_bucket_public_access_block.website_bucket
  ]
}

resource "aws_s3_bucket_website_configuration" "website_bucket" {
  bucket = aws_s3_bucket.website_bucket.id

  index_document {
    suffix = "index.html"
  }
  error_document {
    key = "index.html"
  }
}

## From module "s3_static_files" in github.com/nsbno/terraform-aws-ssr-site for the deployment pipeline
locals {
  ssm_parameters = {
    static_files_bucket_name = aws_s3_bucket.website_bucket.id
  }
}

resource "aws_ssm_parameter" "ssm_parameters" {
  for_each = local.ssm_parameters

  name  = "/__deployment__/applications/${var.application_name}/${each.key}"
  type  = "String"
  value = aws_s3_bucket.website_bucket.id
}
