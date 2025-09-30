variable "environment" {
  type        = string
  description = "The name of the environment that your service is running in (examples: test, stage, prod)."

  validation {
    condition     = contains(["test", "stage", "service", "prod"], var.environment)
    error_message = "The only valid environments are test, stage, service and prod."
  }
}


