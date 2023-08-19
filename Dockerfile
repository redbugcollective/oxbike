FROM nginx
WORKDIR /app
COPY ./dist /app
COPY ./deploy/nginx.conf /etc/nginx/conf.d/default.conf