# Base node image
FROM node:20-alpine AS base

# Set environment variables

# Install pnpm globally
RUN npm install -g pnpm

# Install all node_modules, including dev dependencies

# Set NODE_ENV to development to install dev dependencies

RUN mkdir /app
WORKDIR /app

# Copy workspace-related files from the monorepo root
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY apps/docs/package.json apps/docs/package.json

# Install all dependencies (including devDependencies)
ENV NODE_ENV=development
RUN pnpm install --frozen-lockfile
ENV NODE_ENV=production

COPY . .

RUN pnpm  build

# Get some secrets
RUN wget -O /usr/local/bin/aws-env https://github.com/telia-oss/aws-env/releases/download/v0.3.0/aws-env-linux-amd64 && \
    chmod +x /usr/local/bin/aws-env
    
# Start the application
CMD ["pnpm", "--filter", "@vygruppen/docs", "start"]