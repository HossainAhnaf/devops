FROM node:16-alpine AS base

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

FROM base AS dev

COPY --from=base ./ ./

EXPOSE 5000

CMD ["npm","start"]