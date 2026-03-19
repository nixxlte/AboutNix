#!/bin/bash

# Code by Nyan.T64 -w-

sudo dnf update && sudo dnf upgrade
sudo dnf install flatpak git
flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo

flatpak update