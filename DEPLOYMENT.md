# Deploying Vistas Marketing to Google Cloud Run

This guide walks through deploying the **vistas-marketing** frontend to
[Google Cloud Run](https://cloud.google.com/run) as a containerised Nginx
service.

---

## Prerequisites

| Requirement                | How to install / verify                              |
| -------------------------- | ---------------------------------------------------- |
| Google Cloud SDK (`gcloud`) | [Install Guide](https://cloud.google.com/sdk/docs/install) — `gcloud --version` |
| Docker (optional, for local testing) | [Docker Desktop](https://www.docker.com/products/docker-desktop/) |
| GCP Project                | `vlearning-e7dae` (or your own)                      |
| Billing enabled            | Required for Cloud Run                                |
| Permissions                | `roles/run.admin`, `roles/iam.serviceAccountUser`, `roles/cloudbuild.builds.editor` |

---

## Step 1 — Authenticate

```bash
gcloud auth login
```

This opens a browser window. Sign in with the Google account that has access
to the GCP project.

---

## Step 2 — Set the Active Project

```bash
gcloud config set project vlearning-e7dae
```

Verify:

```bash
gcloud config get-value project
# → vlearning-e7dae
```

---

## Step 3 — Enable Required APIs (first time only)

```bash
gcloud services enable \
  run.googleapis.com \
  cloudbuild.googleapis.com \
  artifactregistry.googleapis.com
```

---

## Step 4 — Deploy

```bash
gcloud run deploy vistas-marketing \
  --source . \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated
```

### What happens under the hood

1. **`--source .`** — Cloud Build reads the `Dockerfile` in the repo root,
   builds the image remotely, and pushes it to Artifact Registry.
2. The multi-stage Dockerfile:
   - **Stage 1 (build-stage):** `node:20-alpine` → `npm ci` → `vite build` →
     produces static files in `/app/dist`.
   - **Stage 2 (production-stage):** `nginx:stable-alpine` → copies `dist/`
     into Nginx's web root → uses `start.sh` to generate an Nginx config
     that listens on the `$PORT` env var Cloud Run injects (default `8080`).
3. Cloud Run deploys the resulting container and gives you a public URL.

### Expected output

```
Building using Dockerfile and target/multi-stage build...
...
Service [vistas-marketing] revision [vistas-marketing-00001-abc] has been deployed
and is serving 100 percent of traffic.

Service URL: https://vistas-marketing-xxxxxxxxx-uc.a.run.app
```

---

## Step 5 — Verify the Deployment

```bash
# Quick health check
curl -s -o /dev/null -w "%{http_code}" \
  https://vistas-marketing-xxxxxxxxx-uc.a.run.app

# Open in browser
gcloud run services describe vistas-marketing \
  --region us-central1 \
  --format='value(status.url)'
```

---

## Updating the Deployment

Simply re-run the deploy command. Cloud Build will rebuild and Cloud Run will
create a new revision with zero-downtime traffic shifting:

```bash
gcloud run deploy vistas-marketing \
  --source . \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated
```

---

## Setting Environment Variables

To pass build-time variables (e.g. `VITE_API_URL`), use Cloud Build
substitutions or set them as build args:

```bash
gcloud run deploy vistas-marketing \
  --source . \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated \
  --set-env-vars="VITE_API_URL=https://api-prod.vistaslearning.com"
```

> **Note:** `VITE_*` variables are inlined at *build* time by Vite. To pass
> them through Cloud Build, you'd need a `cloudbuild.yaml` with
> `--build-arg`. For a simple deploy with `--source`, the Dockerfile
> `ARG VITE_API_URL` is used.
>
> To supply build args via `--source` deploys, create a `cloudbuild.yaml`:
>
> ```yaml
> steps:
>   - name: 'gcr.io/cloud-builders/docker'
>     args:
>       - 'build'
>       - '--build-arg'
>       - 'VITE_API_URL=https://api-prod.vistaslearning.com'
>       - '-t'
>       - '$_IMAGE_NAME'
>       - '.'
> images:
>   - '$_IMAGE_NAME'
> ```
>
> Then deploy with:
> ```bash
> gcloud run deploy vistas-marketing \
>   --image $_IMAGE_NAME \
>   --platform managed \
>   --region us-central1 \
>   --allow-unauthenticated
> ```

---

## Custom Domain (Optional)

```bash
# Map your domain
gcloud run domain-mappings create \
  --service vistas-marketing \
  --domain marketing.vistaslearning.com \
  --region us-central1

# Follow the DNS verification instructions output by the command
```

---

## Scaling & Resource Configuration

Cloud Run defaults are suitable for a static frontend. Adjust if needed:

```bash
gcloud run services update vistas-marketing \
  --region us-central1 \
  --min-instances 0 \
  --max-instances 10 \
  --memory 256Mi \
  --cpu 1 \
  --concurrency 250
```

| Setting          | Recommended | Why                                      |
| ---------------- | ----------- | ---------------------------------------- |
| `min-instances`  | `0`         | Scale to zero when idle (cost savings)   |
| `max-instances`  | `10`        | Nginx serves static files very fast      |
| `memory`         | `256Mi`     | Nginx is lightweight                     |
| `concurrency`    | `250`       | Nginx handles many concurrent requests   |

---

## Viewing Logs

```bash
# Stream live logs
gcloud run services logs read vistas-marketing \
  --region us-central1 \
  --limit 50

# Or use Cloud Console
# → https://console.cloud.google.com/run/detail/us-central1/vistas-marketing/logs
```

---

## Rollback

```bash
# List revisions
gcloud run revisions list \
  --service vistas-marketing \
  --region us-central1

# Route 100% traffic to a previous revision
gcloud run services update-traffic vistas-marketing \
  --region us-central1 \
  --to-revisions REVISION_NAME=100
```

---

## Troubleshooting

| Issue | Solution |
| ----- | -------- |
| `ERROR: (gcloud.run.deploy) PERMISSION_DENIED` | Ensure your account has `roles/run.admin` and `roles/cloudbuild.builds.editor` |
| Build fails on `npm ci` | Check that `package-lock.json` is committed and not in `.dockerignore` |
| 404 on page refresh (SPA routes) | The `start.sh` Nginx config has `try_files $uri $uri/ /index.html` — this should work. Verify it's being copied correctly. |
| Assets return wrong MIME type | `start.sh` includes `/etc/nginx/mime.types` — verify the include line exists |
| Container starts but returns 502 | Check Cloud Run logs — likely `PORT` mismatch. `start.sh` reads `$PORT` automatically. |

---

## Architecture Overview

```
┌─────────────┐     ┌──────────────────┐     ┌─────────────────┐
│  Developer   │────▶│  Cloud Build     │────▶│  Artifact       │
│  git push    │     │  (Dockerfile)    │     │  Registry       │
└─────────────┘     └──────────────────┘     └────────┬────────┘
                                                       │
                                                       ▼
                                              ┌─────────────────┐
                                              │  Cloud Run      │
                                              │  (Nginx+SPA)    │
                                              │  :8080          │
                                              └────────┬────────┘
                                                       │
                                                       ▼
                                              ┌─────────────────┐
                                              │  Public URL     │
                                              │  *.run.app      │
                                              └─────────────────┘
```
