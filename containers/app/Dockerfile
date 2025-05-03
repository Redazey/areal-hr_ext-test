FROM node:latest AS build

WORKDIR /app

COPY ./app/package*.json ./
RUN npm install

COPY ./localhost.pem ../localhost.pem
COPY ./localhost-key.pem ../localhost-key.pem
COPY ./app ./

RUN npm run build
FROM nginx:latest
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]