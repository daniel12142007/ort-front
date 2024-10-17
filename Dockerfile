FROM node:16-alpine as build

WORKDIR /app
ENV NODE_OPTIONS="--max_old_space_size=4096"

COPY package*.json ./
COPY package-lock.json ./
RUN npm install

COPY . .

RUN npm run build

FROM nginx
COPY --from=build /app/build /usr/share/nginx/html

COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

CMD [ "nginx", "-g", "daemon off;" ]
