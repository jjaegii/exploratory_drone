import RPi.GPIO as GPIO
import time
import sys

servo_pin = 18
GPIO.setmode(GPIO.BCM)
GPIO.setup(servo_pin,GPIO.OUT)
pwm = GPIO.PWM(servo_pin,50)
pwm.start(3.0)

#pwm.start(3.0)
#timeA = 0.6

#print(float(sys.argv[1]))
#pwm.ChangeDutyCycle(3.0)
#time.sleep(1.0)

pwm.ChangeDutyCycle(float(sys.argv[1]))   # 서보모터를 0도로 회전(이동)
time.sleep(1.0)   
pwm.ChangeDutyCycle(0.0)

pwm.stop()
GPIO.cleanup()
