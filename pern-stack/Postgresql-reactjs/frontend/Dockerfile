FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json .

RUN npm install --omit=dev

COPY . .

RUN npm run build


FROM node:20-alpine

COPY --from=builder /app/build ./build

RUN npm install -g serve

EXPOSE 3000

CMD ["serve","-s","build","-l","3000"]