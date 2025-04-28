FROM node:16-alpine AS builder

ARG NODE_ENV
ARG REACT_APP_LOCALHOST_KEY
ARG BACKEND_HOST

ENV NODE_ENV=$NODE_ENV
ENV REACT_APP_LOCALHOST_KEY=$REACT_APP_LOCALHOST_KEY
ENV BACKEND_HOST=$BACKEND_HOST

WORKDIR /app

COPY package*.json ./

RUN npm config set fetch-retry-maxtimeout 60000
RUN npm config set fetch-timeout 60000


RUN npm install --omit=dev

COPY . .

RUN npm run build

FROM node:16-alpine

WORKDIR /app

COPY --from=builder /app/build ./build

RUN npm install -g serve

EXPOSE 3000

CMD ["serve","-s","build", "-l","3000"]