#!/bin/sh
if [ -z "$AWS_REGION" ] && [ -z "$AWS_DEFAULT_REGION" ]; then
export AWS_REGION="eu-west-1"
fi
exec /usr/local/bin/aws-env exec npm start