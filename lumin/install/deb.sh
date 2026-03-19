#!/bin/bash

# Code by Nyan.T64 -w-

sudo apt update && sudo apt upgrade
sudo apt install flatpak
flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo

flatpak update

curl -s https://nyannix.is-a.dev/lumin/install/InstallBash.sh | bash

#mkdir ~/container && cd ~/container
#mkdir LuminOS
#mkdir github && cd github
#git clone https://github.com/nixxlte/LuminOS
#cd LuminOS
#git pull
#cp * ~/container/LuminOS && cd ~/container/LuminOS
#rm -rf ~/container/github/LuminOS # This is to optimize space
#rm -rf .gitattributes 2097.txt LICENCE
#cd Root
#cp ./bashrc ~/.bashrc
#source ~/.bashrc
#cd ~/container
#git clone https://github.com/nixxlte/LuminCORE
#cd LuminCORE
#git pull
#mkdir /home/luminos
#sudo cp -r System/Modifications/* /home/luminos
#cd /home/luminos
#curl -fsSL https://github.com/nixxlte/LuminCORE/releases/download/LuminOS%22Eclipse%22/Overlay.sdkx -O