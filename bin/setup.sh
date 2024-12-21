#!/bin/bash
# The following command needs to be run if the script is not executable
# chmod +x setup.sh

CONTAINER_NAME="cis2500"
IMAGE_NAME="cis2500-textbook"

echo "Building the Docker image: $IMAGE_NAME"
docker build -t $IMAGE_NAME .

if [ $(docker ps -aq -f name=$CONTAINER_NAME) ]; then
  echo "Stopping and removing existing container: $CONTAINER_NAME"
  docker stop $CONTAINER_NAME
  docker rm $CONTAINER_NAME
fi

echo "Starting a new container: $CONTAINER_NAME"
docker run --name $CONTAINER_NAME -d -p 3000:3000 $IMAGE_NAME