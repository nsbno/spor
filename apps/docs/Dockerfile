# Base node image
FROM node:20-alpine AS base

# Set environment variables
ENV NODE_ENV=production

# Install pnpm globally
RUN npm install -g pnpm

# Install all node_modules, including dev dependencies
FROM base as deps

# Set NODE_ENV to development to install dev dependencies
ENV NODE_ENV=development

RUN mkdir /app
WORKDIR /app

# Copy workspace-related files from the monorepo root
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY apps/docs/package.json apps/docs/

# Install all dependencies (including devDependencies)
RUN pnpm i --frozen-lockfile --prod=false

# Setup production node_modules
FROM base AS production-deps



ENV NODE_ENV=production

RUN mkdir /app
WORKDIR /app

# Copy only production dependencies
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY apps/docs/package.json apps/docs/

RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile

# Build the app
FROM base AS build

RUN mkdir /app
WORKDIR /app



# Copy dependencies
COPY --from=deps /app/node_modules /app/node_modules

ADD . .

RUN pnpm --filter @vygruppen/docs... build

# Get some secrets
RUN wget -O /usr/local/bin/aws-env https://github.com/telia-oss/aws-env/releases/download/v0.3.0/aws-env-linux-amd64 && \
    chmod +x /usr/local/bin/aws-env

# # Corrected paths
# COPY --from=production-deps /app/node_modules /app/node_modules

# COPY --from=build /app/apps/docs/build/server /app/apps/docsbuild/server
# COPY --from=build /app/apps/docs/build/client /app/apps/docsbuild/client
# ADD . .

RUN pnpm --filter @vygruppen/docs start
    
# Start the application
CMD ["pnpm", "start"]