import serial
import time
import string
import pynmea2
import os

for i in range(5):
    port="/dev/ttyAMA0"
    ser=serial.Serial(port, baudrate=9600, timeout=0.5)
    dataout = pynmea2.NMEAStreamReader()
    newdata=ser.readline()

    if newdata[0:6] == "$GPRMC":
        newmsg=pynmea2.parse(newdata)
        lat=newmsg.latitude
        lng=newmsg.longitude
        gps = format(lat,".5f") + "\n" + format(lng,".5f")
        print(gps)
        print("end")
    time.sleep(0.5)
