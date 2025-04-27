# Build stage
FROM node:20-alpine AS builder

ARG REACT_APP_CONTAINER_NAME
ENV REACT_APP_CONTAINER_NAME=$REACT_APP_CONTAINER_NAME

WORKDIR /app

COPY package*.json ./

RUN npm install --omit=dev --silent

COPY . .

RUN npm run build

# Production stage
FROM node:20-alpine AS runner

WORKDIR /app

# Install a tiny HTTP server
RUN npm install -g serve

COPY --from=builder /app/build ./build

EXPOSE 3000

CMD ["serve", "-s", "build", "-l", "3000"]
