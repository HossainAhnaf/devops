FROM node:20-alpine

WORKDIR /app

COPY package*.json .

RUN npm install --silent

COPY . .

EXPOSE 5000

CMD ["node","index.js"]