FROM node:latest
WORKDIR /app

COPY ./api/package*.json ./
RUN npm install

COPY ./.env ../.env
COPY ./api ./

EXPOSE 3001
RUN chmod +x ./start.sh
CMD ["./start.sh"]
