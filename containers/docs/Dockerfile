FROM node:latest

WORKDIR /app

COPY ./documentation/docs ./docs
COPY ./documentation/package*.json ./

RUN npm install

EXPOSE 5173

CMD ["npm", "run", "dev"]
