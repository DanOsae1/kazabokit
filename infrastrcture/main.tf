resource "google_cloud_run_v2_service" "web_app" {
  name     = "kazabokit-web"
  location = var.region
  client   = "terraform"

  template {
    containers {
      image = "gcr.io/${var.project_id}/kazabokit:${var.image_tag}"
      resources {
        limits = {
          cpu    = "1000m"
          memory = "512Mi"
        }
      }
      ports {
        container_port = 80
      }
    }
  }
}
