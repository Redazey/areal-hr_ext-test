FROM node:latest
WORKDIR /app

COPY ./api/package*.json ./
RUN npm install

COPY ./.env ../.env
COPY ./.env ./.env
COPY ./localhost.pem ../localhost.pem
COPY ./localhost-key.pem ../localhost-key.pem
COPY ./api ./

EXPOSE 3001
RUN chmod +x ./start.sh
CMD ["./start.sh"]
