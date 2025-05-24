FROM node:20-alpine

WORKDIR /app

RUN npm install sequelize-cli


COPY package*.json .

RUN npm install --silent

COPY . .

EXPOSE 5000

CMD ["npm","run","start"]