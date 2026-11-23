# Expects apps/designmanual-frontend/build and packages/spor-icon/dist in the
# context. CI builds them in .github/workflows/build-designmanual.yml; locally, see the
# build steps in that file.

FROM node:26.13.1-alpine AS production-deps
ENV NODE_ENV=production
WORKDIR /app

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN npm install -g "$(node -p "require('./package.json').packageManager")"

COPY apps/designmanual-frontend/package.json apps/designmanual-frontend/
# Without it, --frozen-lockfile fails: spor-icon's lockfile entry has no dependencies,
# and pnpm can't check it against a package.json that isn't there.
COPY packages/spor-icon/package.json packages/spor-icon/
RUN pnpm install --frozen-lockfile --ignore-scripts --prod

FROM node:26.13.1-alpine AS final
ENV NODE_ENV=production

RUN wget -O /usr/local/bin/aws-env https://github.com/telia-oss/aws-env/releases/download/v0.3.0/aws-env-linux-amd64 && \
    chmod +x /usr/local/bin/aws-env

WORKDIR /app/apps/designmanual-frontend

COPY --from=production-deps /app/node_modules /app/node_modules
COPY --from=production-deps /app/apps/designmanual-frontend/node_modules ./node_modules
COPY apps/designmanual-frontend/package.json ./
COPY apps/designmanual-frontend/build ./build
# Read at runtime by icons.server.ts
COPY packages/spor-icon/svg /app/packages/spor-icon/svg
COPY packages/spor-icon/dist /app/packages/spor-icon/dist

CMD ["node_modules/.bin/react-router-serve", "./build/server/index.js"]
