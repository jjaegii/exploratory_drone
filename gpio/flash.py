import RPi.GPIO as GPIO
import time
import sys

file_path = sys.argv[1]  # 파일위치 받기


GPIO.setmode(GPIO.BCM)  # 초기 핀 세팅
n = 26
GPIO.setup(n,GPIO.OUT)

if(sys.argv[1]=="on"):  # 인자로 on 입력시 
    GPIO.output(n,True)  # 불 켜짐
    time.sleep(1)
    #GPIO.cleanup()
else:  # 다른거 입력시 ex)off
    GPIO.cleanup()  # 핀할당 해제
