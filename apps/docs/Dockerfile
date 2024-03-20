# base node image
FROM node:20-alpine as base

# set for base and all that inherit from it
ENV NODE_ENV=production

# Install all node_modules, including dev dependencies
FROM base as deps

RUN mkdir /app
WORKDIR /app

ADD package.json ./
# Install both devDependencies and dependencies 
# (even when NODE_ENV=production)
RUN npm install --production=false

# Setup production node_modules
FROM base as production-deps

RUN mkdir /app
WORKDIR /app

# Copy all node_modules to the production image
COPY --from=deps /app/node_modules /app/node_modules
ADD package.json ./
# Delete all dev dependencies from the node_modules
RUN npm prune --omit=dev

# Build the app
FROM base as build

RUN mkdir /app
WORKDIR /app

COPY --from=deps /app/node_modules /app/node_modules

ADD . .
RUN npm run build

# Finally, build the production image with minimal footprint
FROM base as final

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

ENTRYPOINT ["./entrypoint.sh"]
CMD ["npm", "run", "start"]