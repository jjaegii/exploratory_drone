import RPi.GPIO as GPIO
import time
import sys

left = 4  # 왼쪽바퀴 360 서보모터 핀
right = 27  # 오른쪽바퀴 360 서보모터 핀

GPIO.setmode(GPIO.BCM)  # 초기 핀 세팅
GPIO.setup(left,GPIO.OUT)
GPIO.setup(right,GPIO.OUT)

pwml = GPIO.PWM(left,50)  # PWM 세팅
pwmr = GPIO.PWM(right,50)

pwml.start(3.0)  # 초기값 세팅
pwmr.start(3.0)
stoptime=0.35  

if(sys.argv[1]=="right"):   # 인자로 right 입력시
    pwmr.ChangeDutyCycle(11.0)   # 오른쪽 역방향
    pwml.ChangeDutyCycle(11.0)   # 왼쪽 정방향
    time.sleep(stoptime)  # 0.35동안 sleep
    pwmr.stop()  # 정지
    pwml.stop()

# 이하 동일
elif(sys.argv[1]=="left"):  
    
    pwmr.ChangeDutyCycle(4.0)   # 오른쪽 정방향
    pwml.ChangeDutyCycle(4.0)   # 왼쪽 역방향
    
    time.sleep(stoptime)
    pwml.stop()
    pwmr.stop()
    
#    time.sleep(0.5)
elif(sys.argv[1]=="back"):
    pwml.ChangeDutyCycle(4.0)   # 왼쪽 역방향
    pwmr.ChangeDutyCycle(11.0)   # 오른쪽 역방향
    time.sleep(stoptime)
    pwmr.stop()
    pwml.stop()
#    time.sleep(0.5)   
elif(sys.argv[1]=="go"):
    pwml.ChangeDutyCycle(11.0)   # 왼쪽 정방향
    pwmr.ChangeDutyCycle(4.0)   # 오른쪽 정방향
    time.sleep(stoptime)
    pwmr.stop()
    pwml.stop()

GPIO.cleanup()  # 핀할당 해제


