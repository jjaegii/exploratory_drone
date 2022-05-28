import RPi.GPIO as GPIO
import time
import json

#print("AkibaTV HC-SR04 Start")

GPIO.setmode(GPIO.BCM)
# Yellow : Pin 11 : 17(Trig)
GPIO.setup(27, GPIO.OUT)
# White : Pin 12 : 18(Echo)
GPIO.setup(22, GPIO.IN)

#try:
GPIO.output(27, False)
time.sleep(0.5)

GPIO.output(27, True)
time.sleep(0.00001)
GPIO.output(27, False)

        # 18번이 OFF가 되는 시점을 시작시간으로 설정
while GPIO.input(22) == 0:
    start = time.time()

        # 18번이 ON이 되는 시점을 반사파 수신시간으로 설정
while GPIO.input(22) == 1:
    stop = time.time()

        # 초음파가 되돌아오는 시간차로 거리를 계산한다
time_interval = stop - start
distance = time_interval * 17000
distance = round(distance, 2)

data = {
    'distance': distance
}
with open('dis.json','w') as f:
    json.dump(data,f)
    
print("Distance => ", distance, "cm")

#except KeyboardInterrupt:
GPIO.cleanup()
#print("AkibaTV HC-SR04 End")