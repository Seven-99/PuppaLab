/*
provider "google" {
  project     = "pupalab-portfolio"
  region      = "us-central1"
  credentials = file("credentials.json") 
}

resource "google_storage_bucket" "puppa_storage" {
  name          = "puppa-lab-storage-bucket"
  location      = "US-CENTRAL1"
  force_destroy = true 

  uniform_bucket_level_access = true
}
*/