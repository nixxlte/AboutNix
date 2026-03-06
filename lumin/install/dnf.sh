#!/bin/bash

sudo dnf update && sudo dnf upgrade
sudo dnf install flatpak
flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo