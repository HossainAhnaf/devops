FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install --omit=dev --silent

COPY . .

RUN npm run build


FROM nginx:1.26.3-alpine-slim

COPY --from=builder /app/build /usr/share/nginx/html

#COPY nginx/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx","-g","daemon off;"]