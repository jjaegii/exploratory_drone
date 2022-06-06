#!/bin/bash
while :
do
	python3 /home/pi/nodejs/gpio/cho.py >> /home/pi/nodejs/gpio/distance.txt
    python3 /home/pi/nodejs/gpio/cho.py > /home/pi/nodejs/gpio/distance.txt
    sleep 1
done


#value=$(</home/pi/nodejs/gpio/distance.txt)
#result="${value%%end*}"
#echo $result > /home/pi/nodejs/gpio/distance.txt
