FROM node:16-alpine

WORKDIR /app

COPY node_modules node_modules
COPY package.json .
COPY build build
COPY public public

EXPOSE 3000
CMD npm start