FROM node:20 AS build

WORKDIR /app

COPY . .

RUN npm install -g pnpm

RUN rm -rf node_modules

RUN pnpm install --frozen-lockfile --prefer-frozen-lockfile

RUN pnpm add @angular/cli@latest --save-dev

RUN pnpm run build

FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

COPY --from=build /app/dist/playlist-frontend/browser/. /usr/share/nginx/html/

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
