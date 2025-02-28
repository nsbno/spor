# Base node image
FROM node:20-alpine AS base

# Set environment variable for production
ENV NODE_ENV=production

# Enable corepack and prepare pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Install all node_modules, including dev dependencies
FROM base AS deps

WORKDIR /app

# Copy package.json from the current folder and pnpm-lock.yaml from the parent folder
ADD package.json ../pnpm-lock.yaml ./

# Install both devDependencies and dependencies, even when NODE_ENV=production
RUN pnpm install --frozen-lockfile

# Setup production node_modules
FROM base AS production-deps

WORKDIR /app

# Copy node_modules from the deps stage
COPY --from=deps /app/node_modules /app/node_modules

# Copy package.json and pnpm-lock.yaml from parent folder again for production deps
ADD package.json ../pnpm-lock.yaml ./

# Remove dev dependencies from node_modules for production
RUN pnpm prune --prod

# Build the app
FROM base AS build

WORKDIR /app

# Copy node_modules from the deps stage
COPY --from=deps /app/node_modules /app/node_modules

# Copy the source code and build the app
ADD . .
RUN pnpm build

# Final image with minimal footprint
FROM base AS final

ENV NODE_ENV=production

WORKDIR /app

# Install AWS env binary (if needed for secrets)
RUN wget -O /usr/local/bin/aws-env https://github.com/telia-oss/aws-env/releases/download/v0.3.0/aws-env-linux-amd64 && \
    chmod +x /usr/local/bin/aws-env

# Copy production node_modules
COPY --from=production-deps /app/node_modules /app/node_modules

# Copy build artifacts
COPY --from=build /app/build/server /app/build/server
COPY --from=build /app/build/client /app/build/client

# Add the rest of the files
ADD . .

# Set the default command to start the app
CMD ["pnpm", "run", "start"]
