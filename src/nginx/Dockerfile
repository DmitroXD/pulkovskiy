FROM nginx:1.27.4-alpine

COPY nginx.conf.template /nginx.conf.template

CMD [
    "/bin/sh",
    "-c",
    "envubst '${FRONTEND_PORT} ${API_PORT}' \
    < /nginx.conf.template > /etc/nginx/nginx.conf && exec nginx -g 'daemon off;'"
]
