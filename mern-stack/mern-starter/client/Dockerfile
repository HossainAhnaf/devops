FROM node:20-alpine AS Builder

ARG API_URL
ARG CLIENT_ROOT_URL
ARG NODE_ENV
ENV API_URL=$API_URL
ENV CLIENT_ROOT_URL=$CLIENT_ROOT_URL
ENV NODE_ENV=$NODE_ENV

WORKDIR /app

COPY package*json .

RUN npm install --omit=dev

COPY . .

RUN npm run build

FROM node:20-alpine

WORKDIR /app

RUN npm install -g serve

COPY --from=Builder /app/build ./build

EXPOSE 3000

CMD ["serve","-s","build","-l","3000"]