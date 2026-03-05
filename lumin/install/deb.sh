#!/bin/bash

sudo apt update && sudo apt upgrade
sudo apt install flatpak
flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo

flatpak update
mkdir ~/container && cd ~/container
git clone https://github.com/nixxlte/LuminOS
cd LuminOS
git pull
cd Root
cp ./bashrc ~/.bashrc
source ~/.bashrc
cd ~/container
git clone https://github.com/nixxlte/LuminCORE
cd LuminCORE
git pull
mkdir /home/luminos
sudo cp -r System/Modifications/* /home/luminos