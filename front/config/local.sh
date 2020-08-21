#!/bin/bash

docker build --file ./config/docker/Dockerfile --pull -t local:latest  .
docker-compose -f config/docker/docker-compose-local.yml up -d
