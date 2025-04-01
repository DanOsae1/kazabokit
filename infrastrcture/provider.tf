provider "google" {
  project = var.project_id
}

terraform {
  required_providers {
    google = {
      source = "hashicorp/google"
    }
  }
  backend "gcs" {
    bucket = "kazabokit-terraform-state"
    prefix = "terraform/state"
  }
}
