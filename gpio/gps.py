import serial
import time
import string
import pynmea2
import os

for i in range(5):  # 5번 반복 ( 입력값 수신 보장을 위해)
    port="/dev/ttyAMA0"  # 초기세팅
    ser=serial.Serial(port, baudrate=9600, timeout=0.5)
    dataout = pynmea2.NMEAStreamReader()
    newdata=ser.readline()

    if newdata[0:6] == "$GPRMC":
        newmsg=pynmea2.parse(newdata)
        lat=newmsg.latitude  # 위경도 받아와 저장
        lng=newmsg.longitude
        gps = format(lat,".5f") + "\n" + format(lng,".5f")  # 소수점 5째자리까지 출력
        print(gps)
        print("end")
    time.sleep(0.5)
