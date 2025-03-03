# Base node image
FROM node:20-alpine AS base

# Set environment variables
ENV NODE_ENV=production

# Install pnpm globally
RUN npm install -g pnpm

# Install all node_modules, including dev dependencies
FROM base as deps

RUN mkdir /app
WORKDIR /app

# Set NODE_ENV to development to install dev dependencies
ENV NODE_ENV=development

# Copy workspace-related files from the monorepo root
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY apps/docs/package.json apps/docs/

# Install all dependencies (including devDependencies)
RUN pnpm i --frozen-lockfile --prod=false

# Setup production node_modules
FROM base AS production-deps

WORKDIR /app

# Copy only production dependencies
COPY --from=deps /app/node_modules /app/node_modules
COPY apps/docs/package.json ./


# Build the app
FROM base AS build

RUN mkdir /app
WORKDIR /app

# Copy dependencies
COPY --from=deps /app/node_modules /app/node_modules

# Copy source code
COPY apps/docs ./apps/docs

ADD . .

RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile

# Build the application
RUN pnpm --filter @vygruppen/docs... build

# Finally, build the production image with minimal footprint
FROM base AS final

ENV NODE_ENV=production

RUN mkdir /app
WORKDIR /app

# Get some secrets
RUN wget -O /usr/local/bin/aws-env https://github.com/telia-oss/aws-env/releases/download/v0.3.0/aws-env-linux-amd64 && \
    chmod +x /usr/local/bin/aws-env

# Corrected paths
COPY --from=production-deps /app/node_modules /app/node_modules
COPY --from=build /app/build/server /app/build/server
COPY --from=build /app/build/client /app/build/client
ADD . .
    
# Start the application
CMD ["pnpm", "--filter", "@vygruppen/docs", "start"]