const express = require('express'); // express 프레임워크
const app = express();
var fs = require('fs'); // 파일 입출력 모듈
var exec = require('child_process').exec; // 시스템 호출 함수를 사용하기 위한 자식 프로세스 생성 모듈
const port = 3000; // 포트 번호

app.use(express.static(__dirname)); // 정적파일(css, js) 참조

// 3000번 포트로 서버를 열면서 초음파센서 동작 파일 chowhile.sh 실행
app.listen(3000, () => {
    exec('./gpio/chowhile.sh');
    console.log("Server has been started");
})

// 카메라 동작 파일 mjpg.sh 실행
var mjpgchild = exec('./mjpg.sh',
    function() {
        console.log('camera on');
});

// /로 get 요청이 들어왔을 때
// 서버에 접속하는 유저의 ip주소 출력하고 유저를 control 페이지로 넘겨줌
app.get("/", (req,res) => {
    console.log(req.ip + "에서 접속");
    res.redirect('control');
});

// /control로 get 요청이 들어왔을 때
// control 페이지 제공
app.get("/control", (req,res) => {
    fs.readFile('control.html', (error, data) => {
        res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});
        res.end(data);
    })
});

// /gps로 get 요청이 들어왔을 때
// gps 좌표 값을 읽고 xy.txt에 저장하는 gpswrite.sh 파일 실행 후
// xy.txt에 저장된 좌표 값 전달
app.get('/gps', (req,res) => {
    let writegps = new Promise(function(resolve, reject) {
        exec('./gpio/gpswrite.sh');
        resolve();
    }).then(function() {
        fs.readFile('./gpio/xy.txt', 'utf8', (error, data) => {
            res.send(data);
            res.end();
        });
    }).catch(function() {
        console.log('gps 값 읽기 실패');
    })
})

// /distance로 get 요청이 들어왔을 때
// distance.txt에서 chowhile.sh이 저장한 거리 값을 전달
app.get('/distance', (req,res) => {
    let writedistance = new Promise(function(resolve, reject) {
        resolve();
    }).then(function() {
        fs.readFile('./gpio/distance.txt', 'utf8', (error,data) => {
            res.send(data);
            res.end();
        });
    }).catch(function() {
        console.log('distance 값 읽기 실패');
    });
})

// 이동 부분 위 방향키를 눌러 /up으로 get 요청이 들어왔을 때
// move.py에 전진 인자인 go를 전달하고 실행
app.get("/up", (req,res) => {
    exec('python3 ./gpio/move.py go');
});

// 이동 부분 아래 방향키를 눌러 /down으로 get 요청이 들어왔을 때
// move.py에 후진 인자인 back을 전달하고 실행
app.get("/down", (req,res) => {
    exec('python3 ./gpio/move.py back');
});

// 이동 부분 왼쪽 방향키를 눌러 /left으로 get 요청이 들어왔을 때
// move.py에 좌회전 인자인 left를 전달하고 실행
app.get("/left", (req,res) => {
    exec('python3 ./gpio/move.py left');
});

// 이동 부분 아래 방향키를 눌러 /right으로 get 요청이 들어왔을 때
// move.py에 우회전 인자인 right를 전달하고 실행
app.get("/right", (req,res) => {
    exec('python3 ./gpio/move.py right');
});

// led 버튼을 눌러 /ledOn으로 get 요청이 들어왔을 때
// flash.py에 켜지는 인자인 on을 전달하고 실행
app.get("/ledOn", (req,res) => {
    exec('python3 ./gpio/flash.py on');
});

// led 버튼을 눌러 /ledOff으로 get 요청이 들어왔을 때
// flash.py에 꺼지는 인자인 off를 전달하고 실행
app.get("/ledOff", (req,res) => {
    exec('python3 ./gpio/flash.py off');
});

// 팔 조작 부분 위 방향키를 눌러 /armUp으로 get 요청이 들어왔을 때
// arm.py에 팔을 위로 올리는 인자인 up을 전달하고 실행
app.get("/armUp", (req,res) => {
    exec('python3 ./gpio/arm.py up');
});

// 팔 조작 부분 왼쪽 방향키를 눌러 /armLeft로 get 요청이 들어왔을 때
// arm.py에 팔을 왼쪽으로 움직이는 인자인 left를 전달하고 실행
app.get("/armLeft", (req,res) => {
    exec('python3 ./gpio/arm.py left');
});

// 팔 조작 부분 아래 방향키를 눌러 /armDown으로 get 요청이 들어왔을 때
// arm.py에 팔을 내리는 인자인 down을 전달하고 실행
app.get("/armDown", (req,res) => {
    exec('python3 ./gpio/arm.py down');
});

// 팔 조작 부분 오른쪽 방향키를 눌러 /armRight로 get 요청이 들어왔을 때
// arm.py에 팔을 왼쪽으로 움직이는 인자인 right을 전달하고 실행
app.get("/armRight", (req,res) => {
    exec('python3 ./gpio/arm.py right');
});

// 기계 팔 작동 버튼을 눌러 /armCatch로 get 요청이 들어왔을 때
// arm.py에 집게를 닫게하는 인자인 close를 전달하고 실행
app.get("/armCatch", (req,res) => {
    exec('python3 ./gpio/arm.py close');
});

// 기계 팔 작동 버튼을 눌러 /armRelease로 get 요청이 들어왔을 때
// arm.py에 집게를 열게하는 인자인 open을 전달하고 실행
app.get("/armRelease", (req,res) => {
    exec('python3 ./gpio/arm.py open');
});