#!/bin/bash

upower -i /org/freedesktop/UPower/devices/mouse_hidpp_battery_5 | cat > /home/pi/battery.txt
value=$(</home/pi/battery.txt)
back="${value#*percentage:}"
result="${back%%%*}"
echo  $result

