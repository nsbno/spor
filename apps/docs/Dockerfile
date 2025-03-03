# Base node image
FROM node:20-alpine AS base

# Set environment variables
ENV NODE_ENV=production

# Install pnpm globally
RUN npm install -g pnpm

# Install all dependencies, including devDependencies
FROM base as deps
RUN mkdir /app
WORKDIR /app

# Set NODE_ENV to development to install dev dependencies
ENV NODE_ENV=development

# Copy only necessary files for dependency installation
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY apps/docs/package.json apps/docs/

# Install all dependencies with caching
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod --frozen-lockfile

# Build the application
FROM base AS build

RUN mkdir /app
WORKDIR /app

# Copy dependencies from deps stage
COPY --from=deps /app/node_modules /app/node_modules
COPY --from=deps /app/pnpm-lock.yaml /app/pnpm-lock.yaml
COPY --from=deps /app/package.json /app/package.json
COPY --from=deps /app/apps/docs/package.json /app/apps/docs/package.json

# Copy source code
COPY apps/docs ./apps/docs

RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile

# Build the application
RUN pnpm --filter @vygruppen/docs... build

# Production image with minimal footprint
FROM base AS final
RUN mkdir /app
WORKDIR /app

# Set environment variables for production
ENV NODE_ENV=production

# Get some secrets
RUN wget -O /usr/local/bin/aws-env https://github.com/telia-oss/aws-env/releases/download/v0.3.0/aws-env-linux-amd64 && \
    chmod +x /usr/local/bin/aws-env

# Copy built application
COPY --from=build /app/apps/docs/build /app/build

# Start the application
CMD ["pnpm", "--filter", "@vygruppen/docs", "start"]