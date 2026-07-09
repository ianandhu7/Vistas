# Build Stage
FROM node:20-alpine AS build-stage
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .

# Build argument for Vite
ARG VITE_API_URL
ENV VITE_API_URL=$VITE_API_URL

RUN npm run build

# Production Stage — serve with Nginx
FROM nginx:stable-alpine AS production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Cloud Run sets the PORT env var (default to 8080). Create a small
# start script that writes an nginx config listening on that port
# and then launches nginx.
EXPOSE 8080
COPY start.sh /start.sh
RUN chmod +x /start.sh

CMD ["/start.sh"]
