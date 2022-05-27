import RPi.GPIO as GPIO
import time
import sys

servo_pin = 18
GPIO.setmode(GPIO.BCM)
GPIO.setup(servo_pin,GPIO.OUT)
pwm = GPIO.PWM(servo_pin,50)
GPIO.cleanup()
#pwm.start(3.0)
#timeA = 0.6

pwm.ChangeDutyCycle(float(sys.argv[1]))

