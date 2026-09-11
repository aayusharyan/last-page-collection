# Builds a single nginx image that serves the static variants and does
# random routing on /. Build context is the repo root (see docker-compose.yml).

FROM nginx:alpine

LABEL version="1.1.0"

COPY src/nginx.conf /etc/nginx/nginx.conf
COPY src/public /usr/share/nginx/html

EXPOSE 80
