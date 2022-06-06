import RPi.GPIO as GPIO
import time
import sys
# 5 왼
# 6 오
# 19 상하
# 13 좌우
left = 6
right = 5
ud = 19
lr = 13
GPIO.setmode(GPIO.BCM)
GPIO.setup(left,GPIO.OUT)
GPIO.setup(right,GPIO.OUT)
GPIO.setup(ud,GPIO.OUT)
GPIO.setup(lr,GPIO.OUT)
pleft = GPIO.PWM(right,50)
pright = GPIO.PWM(left,50)
pud = GPIO.PWM(ud,50)
plr = GPIO.PWM(lr,50)
#pwm.start(3.0)

pleft.start(0.0)
pright.start(0.0)
pud.start(0.0)
plr.start(0.0)
#timeA = 0.6

f = open('/home/pi/nodejs/gpio/position.txt', 'r')
upstate = float(f.read(3))
lrstate = float(f.read(3))
f.close()
#print(float(sys.argv[1]))  
#pwm.ChangeDutyCycle(3.0)
#time.sleep(1.0)
if (sys.argv[1]=="down"):
    if(upstate<=8.5):
        upstate+=1
    pud.ChangeDutyCycle(upstate)   # 서보모터를 0도로 회전(이동)
    time.sleep(0.5)  
  # 중강 6.5
elif (sys.argv[1]=="up"):
    if(upstate>=4.5):
        upstate-=1
    pud.ChangeDutyCycle(upstate)   # 서보모터를 0도로 회전(이동)
    time.sleep(0.5)  

elif (sys.argv[1]=="right"):
    if(lrstate>=3.0):
        lrstate-=1
    plr.ChangeDutyCycle(lrstate)   # 서보모터를 0도로 회전(이동)
    time.sleep(0.5)   # 중간 7

elif (sys.argv[1]=="left"):
    if(lrstate<=11.0):
        lrstate+=1
    plr.ChangeDutyCycle(lrstate)   # 서보모터를 0도로 회전(이동)
    time.sleep(0.5)

elif (sys.argv[1]=="close"):
    pleft.ChangeDutyCycle(6.8)
    pright.ChangeDutyCycle(6.5)   # 서보모터를 0도로 회전(이동)
    time.sleep(0.5)   

elif (sys.argv[1]=="open"):
    pleft.ChangeDutyCycle(9.0)
    pright.ChangeDutyCycle(4.5)   # 서보모터를 0도로 회전(이동)
    time.sleep(0.5)
#pwm.ChangeDutyCycle(0.0)

f = open('/home/pi/nodejs/gpio/position.txt', 'w')
f.write(str(upstate)+"\n")
f.write(str(lrstate))

pleft.stop()
pright.stop()
pud.stop()
plr.stop()

GPIO.cleanup()
