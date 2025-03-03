# Base node image
FROM node:20-alpine AS base

# Set environment variables
ENV NODE_ENV=production

# Install pnpm globally
RUN npm install -g pnpm

# Install all node_modules, including dev dependencies
FROM base as deps

WORKDIR /app

# Copy workspace-related files from the monorepo root
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY apps/docs/package.json apps/docs/

# Install all dependencies (including devDependencies)
RUN pnpm install --frozen-lockfile

# Setup production node_modules
FROM base AS production-deps

WORKDIR /app

# Copy only production dependencies
COPY --from=deps /app/node_modules /app/node_modules
COPY apps/docs/package.json ./


# Remove devDependencies
RUN pnpm prune --prod

# Build the app
FROM base AS build
WORKDIR /app

# Copy dependencies
COPY --from=deps /app/node_modules /app/node_modules

# Copy source code
COPY apps/docs ./apps/docs

ADD . .



# Install dependencies again to ensure node_modules is present

# Build the application
RUN pnpm --filter @vygruppen/docs... build

# Finally, build the production image with minimal footprint
FROM base AS final

ENV NODE_ENV=production

WORKDIR /app

# Get some secrets
RUN wget -O /usr/local/bin/aws-env https://github.com/telia-oss/aws-env/releases/download/v0.3.0/aws-env-linux-amd64 && \
    chmod +x /usr/local/bin/aws-env

COPY --from=build /app/apps/docs/build /app/build

ADD . .
COPY apps/docs .
    
# Start the application
CMD ["pnpm", "run", "start", "--filter", "@vygruppen/docs"]