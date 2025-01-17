FROM node:lts-alpine AS build

WORKDIR /app
COPY package*.json ./
RUN npm install --silent
COPY . .
RUN npm install -g @angular/cli
RUN npm install @angular-devkit/build-angular --save-dev
RUN npm run build --prod

FROM nginx:alpine

COPY --from=build /app/dist/atletica-sagui/browser /usr/share/nginx/html
COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
