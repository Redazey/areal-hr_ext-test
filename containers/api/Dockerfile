FROM node:latest
WORKDIR /app
COPY ./api/package*.json ./
RUN npm install
COPY ./api ./
EXPOSE 3001
CMD ["npm", "run", "start:dev"]