import RPi.GPIO as GPIO
import time
import json

GPIO.setmode(GPIO.BCM)
# Pin 11 : 17(Trig)
GPIO.setup(17, GPIO.OUT)
# Pin 12 : 18(Echo)
GPIO.setup(18, GPIO.IN)

GPIO.output(17, False)  # 초기세팅
time.sleep(0.5)

GPIO.output(17, True)
time.sleep(0.00001)
GPIO.output(17, False)

        # 18번이 OFF가 되는 시점을 시작시간으로 설정
while GPIO.input(18) == 0:
    start = time.time()

        # 18번이 ON이 되는 시점을 반사파 수신시간으로 설정
while GPIO.input(18) == 1:
    stop = time.time()

        # 초음파가 되돌아오는 시간차로 거리를 계산한다
time_interval = stop - start
distance = time_interval * 17000
distance = round(distance, 2)

    
print("Distance => ", distance, "cm")  # 결과값 출력

GPIO.cleanup()  # 할당 해제
