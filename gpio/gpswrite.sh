#!/bin/bash
python gps.py > xy.txt
value=$(<xy.txt)
result="${value%%end*}"
echo $result > xy.txt
