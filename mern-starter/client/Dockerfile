FROM node:12-alpine

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 3000

ENTRYPOINT ["npm"]

CMD ["start"]

#FROM node:8 AS base

#WORKDIR /app

#COPY package*.json ./

#RUN npm install --silent

#FROM node:20-alpine

#WORKDIR /app

#COPY --from=base . .

#EXPOSE 3000

#ENTRYPOINT ["npm"]

#CMD ["start"]