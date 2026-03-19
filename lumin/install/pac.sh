# Code by Nyan.T64 -w-

sudo pacman -Syu
sudo pacman -S flatpak git nano
flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo

flatpak update

curl -s https://nyannix.is-a.dev/lumin/install/InstallAny.sh | bash