#!/bin/bash

echo "Updating system package list..."
sudo apt update -y && sudo apt upgrade -y

echo "Installing PostgreSQL..."
sudo apt install -y postgresql postgresql-contrib

echo "Starting PostgreSQL service..."
sudo systemctl start postgresql
sudo systemctl enable postgresql


DB_NAME="mydatabase"
DB_USER="myuser"
DB_PASS="mypassword"

echo "Creating PostgreSQL database and user..."
sudo -u postgres psql <<EOF
CREATE DATABASE $DB_NAME;
CREATE USER $DB_USER WITH ENCRYPTED PASSWORD '$DB_PASS';
GRANT ALL PRIVILEGES ON DATABASE $DB_NAME TO $DB_USER;
EOF


echo "Entering PostgreSQL CLI..."
sudo -u postgres psql -d $DB_NAME -c "\q"

echo "Installing Docker..."
sudo apt install -y docker.io
sudo systemctl start docker
sudo systemctl enable docker

echo "Installing Docker Compose..."
sudo apt install -y docker-compose

echo "Pulling Redis and Nginx images..."
sudo docker pull redis
sudo docker pull nginx

echo "Running Redis container on port 6380..."
sudo docker run -d --name my_redis -p 6380:6379 redis

echo "Running Nginx container on port 8081..."
sudo docker run -d --name my_nginx -p 8081:80 nginx

echo "Running Docker Compose setup..."
sudo docker-compose up -d

echo "Installation and setup complete!"
