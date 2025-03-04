# ---- Stage 1: Install dependencies ----
FROM node:20-alpine AS deps

RUN NODE_ENV=development

WORKDIR /app

# Install pnpm globally
RUN npm install -g pnpm

# Copy only dependency-related files first (for better caching)
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY apps/docs/package.json apps/docs/package.json

# Install all dependencies, including devDependencies
RUN pnpm install --frozen-lockfile

# ---- Stage 2: Build the application ----
FROM node:20-alpine AS build

RUN npm install -g pnpm

WORKDIR /app

# Copy dependencies from deps stage
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/pnpm-lock.yaml ./pnpm-lock.yaml
COPY . .

# Build the application
RUN pnpm build

# ---- Stage 3: Production runtime ----
FROM node:20-alpine AS runtime

WORKDIR /app

# Set environment variable for production
ENV NODE_ENV=production

# Install only production dependencies
RUN npm install -g pnpm
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY apps/docs/package.json apps/docs/package.json
RUN pnpm install --frozen-lockfile --prod

# Copy built application from build stage
COPY --from=build /app/apps/docs/build ./apps/docs/build

# Get some secrets (consider doing this in an entrypoint script instead)
RUN wget -O /usr/local/bin/aws-env https://github.com/telia-oss/aws-env/releases/download/v0.3.0/aws-env-linux-amd64 && \
    chmod +x /usr/local/bin/aws-env

# Start the application
CMD ["pnpm", "--filter", "@vygruppen/docs", "start"]
