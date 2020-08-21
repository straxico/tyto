#!/bin/bash
git pull --all
git checkout develop
docker-compose -f config/docker-compose-server.yml pull
docker-compose -f config/docker-compose-server.yml up -d
