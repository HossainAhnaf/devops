FROM node:16-alpine AS builder

WORKDIR /app

COPY package*.json .

RUN npm install --omit=dev

COPY . .

RUN npm run build


FROM nginx:stable-alpine

RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /app/build /usr/share/nginx/html

# COPY nginx/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx","-g","daemon off;"]