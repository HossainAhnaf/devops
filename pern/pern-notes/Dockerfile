FROM node:20-slim AS builder

# Install necessary build tools and Python for node-gyp
RUN apt-get update && apt-get install -y \
    python3 \
    make \
    g++ \
    && rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install

# Copy the rest of the application code
COPY . .

WORKDIR /app/node_modules/bcrypt

RUN pnpm add node-pre-gyp

RUN pnpm dlx node-pre-gyp install --fallback-to-build

WORKDIR /app
# Add step to run migrations
RUN pnpm run db:migrate

RUN pnpm run build


FROM node:20-slim

WORKDIR /app

RUN npm install -g pnpm && pnpm add -g serve

COPY --from=builder . .

EXPOSE 3000 5000

CMD ["pnpm", "prod:all"]
