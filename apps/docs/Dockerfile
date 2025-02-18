# base node image
FROM node:20-alpine AS base

# set for base and all that inherit from it
ENV NODE_ENV=production

# Enable corepack and prepare pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Install all node_modules, including dev dependencies
FROM base as deps

RUN mkdir /app
WORKDIR /app

ADD package.json pnpm-lock.yaml ./
# Install both devDependencies and dependencies 
# (even when NODE_ENV=production)
RUN pnpm install --frozen-lockfile

# Setup production node_modules
FROM base AS production-deps

RUN mkdir /app
WORKDIR /app

# Copy all node_modules to the production image
COPY --from=deps /app/node_modules /app/node_modules
ADD package.json pnpm-lock.yaml ./
# Delete all dev dependencies from the node_modules
RUN pnpm prune --prod

# Build the app
FROM base AS build

RUN mkdir /app
WORKDIR /app

COPY --from=deps /app/node_modules /app/node_modules

ADD . .
RUN pnpm run build

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

CMD ["pnpm", "run", "start"]