sudo yum update -y

sudo yum install -y gcc-c++ make 
curl -sL https://rpm.nodesource.com/setup_16.x | sudo -E bash -
sudo yum install -y nodejs
sudo yum install git -y
npm install
npm install mysql2
npm install express

sudo amazon-linux-extras install docker -y
sudo service docker start
sudo usermod -a -G docker ec2-user
sudo systemctl enable docker
sudo systemctl status docker	


sudo docker pull hello-world
sudo docker images