#!/bin/bash

upower -i /org/freedesktop/UPower/devices/mouse_hidpp_battery_0 | cat > /home/pi/battery.txt
value=$(</home/pi/battery.txt)
back="${value#*updated:}"
result="${back%%has*}"
echo  $result

