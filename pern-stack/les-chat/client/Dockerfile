FROM node:16-alpine AS builder

ARG REACT_APP_API=http://localhost:80/graphql
ARG NODE_ENV=production
ARG REACT_APP_WS=ws://localhost:80/graphql 

ENV REACT_APP_API=${REACT_APP_API}
ENV NODE_ENV=${NODE_ENV}
ENV REACT_APP_WS=${REACT_APP_WS}

WORKDIR /app

COPY package*.json .

RUN npm install --omit=dev

COPY . .

RUN npm run build


FROM node:16-alpine

COPY --from=builder /app/build ./build

RUN npm install -g serve

EXPOSE 3000

CMD ["serve","-s","build","-l","3000"]