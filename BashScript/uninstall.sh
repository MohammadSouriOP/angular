sudo systemctl stop postgresql

sudo apt remove --purge -y postgresql postgresql-*
sudo apt autoremove -y
sudo apt autoclean -y
sudo deluser --remove-home postgres
sudo delgroup postgres
sudo rm -rf /var/lib/postgresql/ /etc/postgresql/ /var/log/postgresql/ /etc/postgresql-common/

sudo docker stop $(sudo docker ps -aq)
sudo docker rm -f $(sudo docker ps -aq)
sudo docker rmi -f $(sudo docker images -aq)
sudo docker network prune -f
sudo docker volume prune -f
sudo docker system prune -a --volumes -f

echo "Docker containers, images, networks, and volumes have been removed successfully!"

sudo systemctl stop docker
sudo apt-get purge -y docker-ce docker-ce-cli containerd.io
sudo apt-get autoremove -y
sudo rm -rf /var/lib/docker
sudo rm /etc/apt/sources.list.d/docker.list
