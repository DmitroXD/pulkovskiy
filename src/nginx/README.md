# Документация Nginx конфигурации

## Обзор
Конфигурация Nginx обеспечивает:
- Проксирование запросов к API и фронтенду
- SSL терминацию
- Gzip сжатие
- Безопасные заголовки
- Оптимизацию производительности

## Структура файлов
```
nginx/
├── Dockerfile            - Сборка Nginx образа
├── nginx.conf.template   - Основной конфиг с переменными
└── ssl/                  - SSL сертификаты
```

## Конфигурация Docker
```dockerfile
FROM nginx:1.27.4-alpine
COPY nginx.conf.template /nginx.conf.template
CMD ["/bin/sh", "-c", "envsubst '${FRONTEND_PORT} ${API_PORT}' < ..."]
```
- Заменяет переменные окружения в шаблоне при запуске

## Основные настройки Nginx

### Проксирование
```nginx
upstream api {
    server api:${API_PORT};
}

location /api/ {
    proxy_pass http://api$request_uri;
}
```
- Балансировка нагрузки между сервисами
- Проксирование /api запросов к backend

### Безопасность
```nginx
add_header X-XSS-Protection "1; mode=block";
add_header X-Frame-Options "DENY";
ssl_protocols TLSv1.2 TLSv1.3;
ssl_ciphers HIGH:!aNULL:!MD5;
```

### Оптимизации
```nginx
gzip on;
gzip_types image/* text/css;
keepalive_timeout 30s;
sendfile on;
```

## SSL конфигурация
```nginx
listen 443 ssl;
ssl_certificate /etc/nginx/ssl/domain.crt;
ssl_certificate_key /etc/nginx/ssl/domain.key;
```
- Для production заменить самоподписанные сертификаты
- Рекомендуется Let's Encrypt

## Развертывание
```bash
# Сборка образа
docker build -t shop-nginx .

# Запуск с переменными окружения
docker run -e API_PORT=3000 -e FRONTEND_PORT=8080 ...
```
