# Vistas Marketing — Frontend

The marketing & landing-page frontend for **Vistas Learning**, India's top e-learning platform.  
Built with **Vue 3 + Vite + Tailwind CSS** and served via **Nginx** in production.

---

## Tech Stack

| Layer       | Technology                         |
| ----------- | ---------------------------------- |
| Framework   | Vue 3 (Composition API)            |
| Build       | Vite 5                             |
| Styling     | Tailwind CSS 3                     |
| State       | Pinia                              |
| HTTP Client | Axios                              |
| Routing     | Vue Router 4                       |
| Server      | Nginx (alpine, production)         |
| Container   | Docker multi-stage build           |
| Hosting     | Google Cloud Run                   |

---

## Local Development

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

### Environment Variables

| Variable       | Description                          | Default               |
| -------------- | ------------------------------------ | --------------------- |
| `VITE_API_URL` | Backend API base URL (build-time)    | —                     |

Create a `.env.local` file in the project root for local overrides:

```env
VITE_API_URL=http://localhost:9090
```

---

## Docker

### Build & Run Locally

```bash
# Build the image
docker build -t vistas-marketing .

# Run on port 8080
docker run -p 8080:8080 vistas-marketing
```

### Docker Compose (frontend + backend)

```bash
docker compose up --build
```

---

## Deployment — Google Cloud Run

See [DEPLOYMENT.md](./DEPLOYMENT.md) for the full step-by-step guide.

**Quick deploy:**

```bash
gcloud auth login
gcloud config set project vlearning-e7dae
gcloud run deploy vistas-marketing \
  --source . \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated
```

---

## Project Structure

```
├── index.html              # SPA entry point
├── Dockerfile              # Multi-stage build (Node → Nginx)
├── start.sh                # Nginx config generator for Cloud Run PORT
├── docker-compose.yml      # Local full-stack compose
├── vite.config.js          # Vite build + dev config
├── tailwind.config.js      # Tailwind design tokens
├── postcss.config.js       # PostCSS plugins
├── public/                 # Static assets (videos, logos, favicon)
└── src/
    ├── main.js             # Vue app bootstrap
    ├── App.vue             # Root component
    ├── assets/             # Processed assets (CSS, images)
    ├── components/         # Reusable UI components
    │   ├── home/           # Home page sections
    │   └── layout/         # Navbar, footer, etc.
    ├── data/               # Static data / content
    ├── router/             # Vue Router config
    ├── services/           # API service layer (Axios)
    ├── stores/             # Pinia stores
    └── views/              # Page-level views
```

---

## Testing

```bash
# Run tests once
npm test

# Watch mode
npm run test:watch

# With coverage
npm run test:coverage
```

---

## Known Limitations

### Payment Flow on Localhost

The full payment flow (Paytm checkout → callback → payment status page) cannot be tested on localhost. This is a browser security limitation, not a bug in the code.

**Why it happens:**

When a payment is initiated, the browser saves a cookie (`marketing_return_url`) so the backend knows where to redirect the user after payment. On localhost, this cookie is locked to `localhost:5173` and the browser will never send it to `api-prod.vistaslearning.com` (a different domain). Without the cookie, the backend falls back to redirecting the user to the production site (`vistaslearning.com/payment-status`). Since localStorage is also domain-locked, the production site cannot see the login token saved on localhost and redirects the user to the login page.

This affects both successful and failed payments — both go through the same backend callback.

On the hosted site everything works correctly because the frontend and backend share the `.vistaslearning.com` domain, so cookies and localStorage are consistent.

---

## License

Private — © Vistas Foundation