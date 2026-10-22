# Base node image
FROM node:22-alpine AS base

# Set environment variables
ENV NODE_ENV=production

# Install pnpm globally
RUN npm install -g pnpm

# Install all node_modules, including dev dependencies
FROM base AS deps

RUN mkdir /app
WORKDIR /app

# Set NODE_ENV to development to install dev dependencies
ENV NODE_ENV=development

# Copy workspace-related files from the monorepo root
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY apps/designmanual-frontend/package.json apps/designmanual-frontend/

# Install all dependencies (including devDependencies)
RUN pnpm install --frozen-lockfile --prod=false --ignore-scripts

# Setup production node_modules
FROM base AS production-deps
ENV NODE_ENV=production


WORKDIR /app

# Copy only production dependencies
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY apps/designmanual-frontend/package.json apps/designmanual-frontend/

RUN pnpm install --frozen-lockfile --ignore-scripts  --prod


# Build the app
FROM base AS build

RUN mkdir /app
WORKDIR /app

# Copy dependencies
ADD . . 

RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile --ignore-scripts


# Build the application
RUN pnpm --filter @vygruppen/designmanual-frontend... build

# Finally, build the production image with minimal footprint
FROM base AS final

ENV NODE_ENV=production
# pnpm 12 checks node_modules against the lockfile before "pnpm start" and reinstalls on a mismatch.
# This image only has production dependencies, so without this it runs a full install at startup.
ENV pnpm_config_verify_deps_before_run=false

RUN mkdir /app
WORKDIR /app

# Get some secrets
RUN wget -O /usr/local/bin/aws-env https://github.com/telia-oss/aws-env/releases/download/v0.3.0/aws-env-linux-amd64 && \
    chmod +x /usr/local/bin/aws-env

# Corrected paths
COPY --from=production-deps /app/node_modules /app/node_modules
COPY --from=production-deps /app/apps/designmanual-frontend/node_modules /app/apps/designmanual-frontend/node_modules
COPY --from=build /app/apps/designmanual-frontend/build/server /app/apps/designmanual-frontend/build/server
COPY --from=build /app/apps/designmanual-frontend/build/client /app/apps/designmanual-frontend/build/client
ADD . .

# Start the application
CMD ["pnpm", "--filter", "@vygruppen/designmanual-frontend", "start"]
