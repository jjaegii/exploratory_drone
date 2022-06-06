import RPi.GPIO as GPIO
import time
import sys

left = 4
right = 27
GPIO.setmode(GPIO.BCM)
GPIO.setup(left,GPIO.OUT)
GPIO.setup(right,GPIO.OUT)
pwml = GPIO.PWM(left,50)
pwmr = GPIO.PWM(right,50)
pwml.start(3.0)
pwmr.start(3.0)
stoptime=0.35

if(sys.argv[1]=="right"):
    pwmr.ChangeDutyCycle(11.0)   # 서보모터를 0도로 회전(이동)
    pwml.ChangeDutyCycle(11.0)   # 서보모터를 0도로 회전(이동)
    time.sleep(stoptime)
    pwmr.stop()
    pwml.stop()


elif(sys.argv[1]=="left"):
    
    pwmr.ChangeDutyCycle(4.0)   # 서보모터를 0도로 회전(이동)
    pwml.ChangeDutyCycle(4.0)   # 서보모터를 0도로 회전(이동)
    
    time.sleep(stoptime)
    pwml.stop()
    pwmr.stop()
    
#    time.sleep(0.5)
elif(sys.argv[1]=="back"):
    pwml.ChangeDutyCycle(4.0)   # 서보모터를 0도로 회전(이동)
    pwmr.ChangeDutyCycle(11.0)   # 서보모터를 0도로 회전(이동)
    time.sleep(stoptime)
    pwmr.stop()
    pwml.stop()
#    time.sleep(0.5)   
elif(sys.argv[1]=="go"):
    pwml.ChangeDutyCycle(11.0)   # 서보모터를 0도로 회전(이동)
    pwmr.ChangeDutyCycle(4.0)   # 서보모터를 0도로 회전(이동)
    time.sleep(stoptime)
    pwmr.stop()
    pwml.stop()
#    time.sleep(0.5) 
#pwm.start(3.0)
#timeA = 0.6

#print(float(sys.argv[1]))
#pwm.ChangeDutyCycle(3.0)
#time.sleep(1.0)

#pwm.ChangeDutyCycle(float(sys.argv[1]))   # 서보모터를 0도로 회전(이동)
#time.sleep(1.0)   
#pwm.ChangeDutyCycle(0.0)

GPIO.cleanup()
#pwmr.stop()
#pwml.stop()

