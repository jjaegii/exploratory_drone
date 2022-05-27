import RPi.GPIO as GPIO
import time
import sys

file_path = sys.argv[1]


GPIO.setmode(GPIO.BCM)
n = 17
GPIO.setup(n,GPIO.OUT)

if(sys.argv[1]=="on"):
    GPIO.output(n,True)
    GPIO.cleanup()
else:
    GPIO.output(n,False)
    GPIO.cleanup()
