#!/bin/bash
python /home/pi/nodejs/gpio/gps.py > /home/pi/nodejs/gpio/xy.txt
value=$(</home/pi/nodejs/gpio/xy.txt)
result="${value%%end*}"
echo $result > /home/pi/nodejs/gpio/xy.txt
