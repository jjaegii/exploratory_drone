# 경로 설정
export STREAMER_PATH=$HOME/mjpg/mjpg-streamer/mjpg-streamer-experimental
export LD_LIBRARY_PATH=$STREAMER_PATH

# 디바이스 ip주소 3333번 포트로 카메라 출력을 초당 30프레임으로 전송
$STREAMER_PATH/mjpg_streamer -i "input_raspicam.so -fps 30 -vf" -o "output_http.so -p 3333 -w $STREAMER_PATH/www"