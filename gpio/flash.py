import RPi.GPIO as GPIO
import time
import sys

file_path = sys.argv[1]


GPIO.setmode(GPIO.BCM)
n = 26
GPIO.setup(n,GPIO.OUT)

if(sys.argv[1]=="on"):
    GPIO.output(n,True)
    time.sleep(1)
    #GPIO.cleanup()
else:
    GPIO.cleanup()
