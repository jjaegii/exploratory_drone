import RPi.GPIO as GPIO
import time

GPIO.setmode(GPIO.BCM)
n = 17
GPIO.setup(20,GPIO.OUT)
GPIO.setup(21,GPIO.OUT)

GPIO.output(20,True)
GPIO.output(21,False)
time.sleep(5)
GPIO.cleanup()