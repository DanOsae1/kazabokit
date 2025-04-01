output "service_url" {
  value = google_cloud_run_v2_service.web_app.status[0].url
}


