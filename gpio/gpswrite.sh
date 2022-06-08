#!/bin/bash
python /home/pi/nodejs/gpio/gps.py > /home/pi/nodejs/gpio/xy.txt
value=$(</home/pi/nodejs/gpio/xy.txt)
result="${value%%end*}"
echo $result > /home/pi/nodejs/gpio/xy.txt
# gps.py를 실행시킨 결과를 xy.txt에 전부 집어넣고 (최대 5개 입력되어 있음)
# 그중 가장 처음 값만을 xy.txt에 저장하고 나머지는 삭제