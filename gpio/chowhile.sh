#!/bin/bash
while :
do
	python3 /home/pi/nodejs/gpio/cho.py >> /home/pi/nodejs/gpio/distance.txt
    python3 /home/pi/nodejs/gpio/cho.py > /home/pi/nodejs/gpio/distance.txt
    sleep 1
done
#  반복문을 돌면서 cho.py의 결과값을 distance.txt파일에 1초마다 갱신하여 저장
