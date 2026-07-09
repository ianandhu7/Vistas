#!/bin/sh
PORT=${PORT:-8080}

cat > /etc/nginx/conf.d/default.conf <<NGINX
server {
    listen ${PORT};
    server_name _;
    root /usr/share/nginx/html;
    index index.html;
    # Prevent Nginx from appending the internal port (e.g. :8080) to redirects
    absolute_redirect off;
    port_in_redirect off;

    # Correct MIME types (critical for ES module scripts)
    include /etc/nginx/mime.types;
    default_type application/octet-stream;

    # Serve pre-compressed .gz files if available
    gzip_static on;

    # Security headers
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-Frame-Options "SAMEORIGIN" always;

    # Cache static assets aggressively (they have hashed filenames)
    location /assets/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
        add_header X-Content-Type-Options "nosniff" always;
        try_files \$uri =404;
    }

    # Cache public files (videos, images) for 7 days
    location ~* \.(mp4|webp|png|jpg|jpeg|gif|ico|svg|woff2|woff|ttf)$ {
        expires 7d;
        add_header Cache-Control "public";
        try_files \$uri =404;
    }

    # SPA fallback: all routes serve index.html
    location / {
        try_files \$uri \$uri/ /index.html;
    }
}
NGINX

exec nginx -g 'daemon off;'
