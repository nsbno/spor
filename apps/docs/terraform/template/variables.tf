variable "application_name" {
  description = "The name of the application -- used together with name_prefix to name application-specific resources."
  type        = string
}

variable "environment" {
  description = "The environment the application is running in."
  type        = string
}

variable "custom_sub_domain" {
  description = "Use custom domain name instead of application_name in App Runner URL"
  type        = string
  default = ""
}
