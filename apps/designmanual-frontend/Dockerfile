# Base node image
FROM node:20-alpine AS base

ENV NODE_ENV=production
RUN npm install -g pnpm

# Install all dependencies (including dev deps + binaries)
FROM base AS deps
WORKDIR /app
ENV NODE_ENV=development

# Copy workspace config
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY patches ./patches
COPY apps/designmanual-frontend/package.json apps/designmanual-frontend/
COPY packages/spor-design-tokens/package.json packages/spor-design-tokens/
COPY packages/spor-react/package.json packages/spor-react/
COPY packages/eslint-config/package.json packages/eslint-config/
COPY packages/spor-icon/package.json packages/spor-icon/
COPY packages/spor-loader/package.json packages/spor-loader/

# Install with cache, NO --ignore-scripts
RUN --mount=type=cache,id=pnpm,target=/pnpm/store \
    pnpm install --frozen-lockfile --prod=false

# Build stage
FROM deps AS build
WORKDIR /app
COPY . .

RUN pnpm --filter @vygruppen/spor-design-tokens build
RUN pnpm --filter @vygruppen/spor-react typegen
RUN pnpm --filter @vygruppen/designmanual-frontend... build

# Deploy stage
FROM build AS deploy
WORKDIR /app
RUN pnpm --filter @vygruppen/designmanual-frontend deploy /deploy-dir --prod

# Final image
FROM base AS final
ENV NODE_ENV=production
WORKDIR /deploy-dir

RUN wget -O /usr/local/bin/aws-env \
    https://github.com/telia-oss/aws-env/releases/download/v0.3.0/aws-env-linux-amd64 && \
    chmod +x /usr/local/bin/aws-env

COPY --from=deploy /deploy-dir /deploy-dir
CMD ["pnpm", "start"]