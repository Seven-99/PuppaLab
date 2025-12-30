Puppa Lab: Cloud-Native Portfolio Architecture
Este repositorio contiene la arquitectura y el código fuente de Puppa Lab, un proyecto diseñado bajo el paradigma de Cloud-Native. El objetivo principal es demostrar habilidades en la containerización, automatización de CI/CD y gestión de servicios serverless en Google Cloud Platform (GCP).

Arquitectura del Sistema
La solución se basa en una arquitectura de micro-despliegue procesada a través de un pipeline de integración y entrega continua.

Componentes Clave:
Frontend Runtime: React.js optimizado mediante un servidor de borde Nginx dentro de un contenedor Alpine Linux.

Container Orchestration: Google Cloud Run (Fully Managed Serverless).

Image Governance: Google Artifact Registry con escaneo de vulnerabilidades.

CI/CD Engine: GitHub Actions integrado con OIDC (OpenID Connect) y Service Accounts de GCP.

Stack Tecnológico:

Cloud Provider - Google Cloud Platform (GCP)
Compute - Cloud Run (Knative-based)
Containerization - Docker (Multi-stage builds)
CI/CD - GitHub Actions
Web Server - Nginx (Reverse Proxy config)
Language - JavaScript / React

Pipeline de DevOps (CI/CD):
El flujo de trabajo automatizado se define en .github/workflows/deploy.yml y ejecuta las siguientes etapas:

Auth & Context: Autenticación mediante google-github-actions/auth utilizando llaves de Service Account encriptadas en GitHub Secrets.

Containerization: Build de la imagen Docker utilizando el contexto de producción.

Registry Push: Etiquetado dinámico y subida de la imagen a us-central1-docker.pkg.dev.

Blue-Green Deployment: Despliegue en Cloud Run con gestión automática de tráfico y aprovisionamiento de certificados SSL/TLS.

Seguridad y Hardening:
Principio de Menor Privilegio: La Service Account dedicada posee roles granulares (roles/run.admin, roles/artifactregistry.writer).

Ingress Control: Configuración de acceso público mediante políticas de IAM (allUsers invoker).

Infrastructure as Code (IaC) Ready: Estructura preparada para ser gestionada vía Terraform.

Despliegue Local (Entorno de Desarrollo):
Para replicar el entorno productivo localmente, se requiere Docker Engine:

# 1. Clonar con submódulos:
git clone https://github.com/Seven-99/PuppaLab.git

# 2. Build de la imagen técnica:
docker build -t puppalab:latest .

# 3. Ejecución con mapeo de puertos:
docker run -d -p 8080:8080 --name puppalab-instance puppalab:latest

Roadmap Técnico
[ ] Implementar Custom Domain Mapping con SSL administrado.

[ ] Integrar Cloud Armor para protección WAF y filtrado de IP.

[ ] Configurar monitorización proactiva con Cloud Logging y Error Reporting.

Troubleshooting & Operational Maintenance:
Esta sección describe los errores comunes encontrados durante el ciclo de vida del despliegue y sus respectivas soluciones.

1. Error de Permisos en el Pipeline (403 Forbidden / IAM)
Síntoma: El paso Deploy to Cloud Run falla con el error PERMISSION_DENIED. Causa: La Service Account de GitHub no tiene los roles de IAM necesarios o la API de Cloud Run está desactivada. Solución:

Verificar que la Service Account tenga los roles: Cloud Run Admin, Storage Admin (para el Registry) y Service Account User.

Asegurar que las APIs necesarias estén activas: gcloud services enable run.googleapis.com artifactregistry.googleapis.com

2. Error: no such file or directory en Docker Build
Síntoma: El build falla al intentar leer el Dockerfile. Causa: Case-sensitivity (Linux es sensible a mayúsculas) o estructura de directorios incorrecta en el repositorio. Solución:

Asegurar que el archivo se llame exactamente Dockerfile (con D mayúscula).

Verificar que el contexto del build en el archivo .yml apunte a la raíz correcta ./.

3. Acceso Público denegado (403 Forbidden en el Navegador)
Síntoma: El despliegue es exitoso (check verde), pero al abrir la URL aparece "Your client does not have permission". Causa: El servicio se despliega por defecto como "Privado". Solución: Forzar la política de acceso público (Unauthenticated invocations):

gcloud run services add-iam-policy-binding puppa-lab-service \
    --region=us-central1 \
    --member="allUsers" \
    --role="roles/run.invoker"

4. Actualización de Secretos de GitHub
Síntoma: google-github-actions/auth falla al autenticar. Causa: El JSON de la cuenta de servicio en GCP_SA_KEY ha expirado o se copió incorrectamente (falta de curly brackets {}). Solución: Reemplazar el secreto en GitHub Settings -> Secrets -> Actions, asegurando que se incluya el objeto JSON completo.

Endpoint de Producción:
URL: https://puppa-lab-service-rldh44bbfq-uc.a.run.app/