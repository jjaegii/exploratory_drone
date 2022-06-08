import RPi.GPIO as GPIO
import time
import sys
# 5 집게 왼쪽 모터
# 6 집게 오른쪽 모터
# 19 상하이동 모터
# 13 좌우이동 모터 
left = 6
right = 5
ud = 19
lr = 13

GPIO.setmode(GPIO.BCM)  # BCM 세팅

GPIO.setup(left,GPIO.OUT)  # 핀번호 할당
GPIO.setup(right,GPIO.OUT)
GPIO.setup(ud,GPIO.OUT)
GPIO.setup(lr,GPIO.OUT)  

pleft = GPIO.PWM(right,50)  # PWM 주파수 설정
pright = GPIO.PWM(left,50)
pud = GPIO.PWM(ud,50)
plr = GPIO.PWM(lr,50)

pleft.start(0.0)  # 초기값 세팅
pright.start(0.0)
pud.start(0.0)
plr.start(0.0)

f = open('/home/pi/nodejs/gpio/position.txt', 'r')  # 위치정보를 담은 파일 열기
upstate = float(f.read(3))  # 상하 위치 읽어와 저장
lrstate = float(f.read(3))  # 좌우 위치 읽어와 저장
f.close()

if (sys.argv[1]=="down"):  # 인자로 down입력시
    if(upstate<=8.5):  # 모터 최댓값 판별
        upstate+=1  # 위치정보 수정
    pud.ChangeDutyCycle(upstate)   # 해당 위치로 모터이동
    time.sleep(0.5)  

# 이하 동일
elif (sys.argv[1]=="up"): 
    if(upstate>=4.5):
        upstate-=1  
    pud.ChangeDutyCycle(upstate)   
    time.sleep(0.5)  

elif (sys.argv[1]=="right"):  
    if(lrstate>=3.0):
        lrstate-=1  
    plr.ChangeDutyCycle(lrstate)
    time.sleep(0.5)  

elif (sys.argv[1]=="left"):
    if(lrstate<=11.0):
        lrstate+=1
    plr.ChangeDutyCycle(lrstate)  
    time.sleep(0.5)

elif (sys.argv[1]=="close"):  # 인자로 close 입력시
    pleft.ChangeDutyCycle(6.8)
    pright.ChangeDutyCycle(6.5)  # 집게를 닫음
    time.sleep(0.5)   

elif (sys.argv[1]=="open"):  # 인자로 open 입력시
    pleft.ChangeDutyCycle(9.0)
    pright.ChangeDutyCycle(4.5)   # 집게를 연다
    time.sleep(0.5)

f = open('/home/pi/nodejs/gpio/position.txt', 'w')  # 위치정보파일 열기
f.write(str(upstate)+"\n")  # 동작후의 위치정보 갱신
f.write(str(lrstate))

pleft.stop()  # 멈춤
pright.stop()
pud.stop()
plr.stop()

GPIO.cleanup()  # 할당 해제
