# Base node image
FROM node:20-alpine AS base

# Set environment variables
ENV NODE_ENV=production

# Install pnpm globally
RUN npm install -g pnpm

# Install all node_modules, including dev dependencies
FROM base AS deps

WORKDIR /app

# Set NODE_ENV to development to install dev dependencies
ENV NODE_ENV=development

# Copy workspace-related files and patches from the monorepo root
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY patches ./patches
COPY apps/designmanual-frontend/package.json apps/designmanual-frontend/
COPY packages/spor-design-tokens/package.json packages/spor-design-tokens/
COPY packages/spor-react/package.json packages/spor-react/
COPY packages/eslint-config/package.json packages/eslint-config/
COPY packages/spor-icon/package.json packages/spor-icon/

# Install all dependencies (including devDependencies) with cache
RUN --mount=type=cache,id=pnpm,target=/pnpm/store \
 pnpm install --frozen-lockfile --prod=false --ignore-scripts

# Build the app
FROM deps AS build

WORKDIR /app

# Copy the full source code
COPY . .

# Build the application
# Need to run typegen to generate types for spor-react, 
# typegen is dependent on spor-design-tokens
RUN pnpm --filter @vygruppen/spor-design-tokens build
RUN pnpm --filter @vygruppen/spor-react typegen
RUN pnpm --filter @vygruppen/designmanual-frontend... build

# Deploy stage to create a production-ready directory
FROM build AS deploy

WORKDIR /app

# Deploy the app to a standalone directory with production dependencies only
RUN pnpm --filter @vygruppen/designmanual-frontend deploy /deploy-dir --prod

# Final production image with minimal footprint
FROM base AS final

ENV NODE_ENV=production

WORKDIR /deploy-dir

# Install aws-env for secrets
RUN wget -O /usr/local/bin/aws-env \
 https://github.com/telia-oss/aws-env/releases/download/v0.3.0/aws-env-linux-amd64 && \
 chmod +x /usr/local/bin/aws-env

# Copy the deployed production app
COPY --from=deploy /deploy-dir /deploy-dir

# Start the application
CMD ["pnpm", "start"]