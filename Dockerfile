FROM nginx:1.29.5

WORKDIR /usr/share/nginx/html/

EXPOSE 80

EXPOSE 443

COPY . .
