FROM node:16-alpine

WORKDIR /app

RUN wget -O /usr/local/bin/aws-env https://github.com/telia-oss/aws-env/releases/download/v0.3.0/aws-env-linux-amd64 && \
    chmod +x /usr/local/bin/aws-env

COPY . /app

EXPOSE 3000
ENTRYPOINT ["./entrypoint.sh"]