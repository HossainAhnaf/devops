FROM node:20-alpine

WORKDIR /app

COPY package*.json .

RUN npm install --omit=dev

copy . .

EXPOSE 5000

USER node

CMD ["npm","run","start"]
