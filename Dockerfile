FROM node:20
WORKDIR /podia-clone
COPY . .
RUN npm install && npm run build

FROM nginx
COPY --from=0 /podia-clone/dist /var/www/html
COPY --from=0 /podia-clone/nginx.conf /etc/nginx/nginx.conf

COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh
ENTRYPOINT [ "sh", "/entrypoint.sh" ]