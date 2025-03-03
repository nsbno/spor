# base node image
FROM node:20-alpine AS base

# set for base and all that inherit from it
ENV NODE_ENV=production

# Enable corepack and prepare pnpm
RUN npm install -g pnpm

# Install all node_modules, including dev dependencies
FROM base as deps

WORKDIR /app

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY apps/docs/package.json apps/docs/

RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod --frozen-lockfile

# Setup production node_modules
FROM base AS production-deps

RUN mkdir /app
WORKDIR /app

# Copy only production dependencies
COPY --from=deps /app/node_modules /app/node_modules
COPY apps/docs/package.json ./

# Build the app
FROM base AS build

RUN mkdir /app
WORKDIR /app

COPY --from=deps /app/node_modules /app/node_modules

ADD . .

RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile

RUN pnpm --filter @vygruppen/docs... build

# Finally, build the production image with minimal footprint
FROM base AS final

ENV NODE_ENV=production

RUN mkdir -p /app
WORKDIR /app

# Get some secrets
RUN wget -O /usr/local/bin/aws-env https://github.com/telia-oss/aws-env/releases/download/v0.3.0/aws-env-linux-amd64 && \
    chmod +x /usr/local/bin/aws-env

# Copy only the production deps to the final image
COPY --from=production-deps /app/node_modules /app/node_modules
# Copy the built files as well
COPY --from=build /app/build/server /app/build/server
COPY --from=build /app/build/client /app/build/client
ADD . .
COPY apps/docs .


CMD ["pnpm", "--filter", "@vygruppen/docs", "start"]
