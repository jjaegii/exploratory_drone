var httpRequest = new XMLHttpRequest(); // HTTP 통신에 사용하는 XMLHttpRequest 인스턴스의 open(), send() 메서드를 사용하기 위해 인스턴스를 생성한다.

// control.html의 이동 부분
var upArrow = document.querySelector('#upArrow');
var downArrow = document.querySelector('#downArrow');
var leftArrow = document.querySelector('#leftArrow');
var rightArrow = document.querySelector('#rightArrow');

// contorl.html의 플래시라이트
var led = document.querySelector('#led');
var isOn = 0; // 1이면 ledon인 상태, 0이면 ledoff인 상태

// control.html의 기계 팔 조작 부분
var armUp = document.querySelector("#armUp");
var armDown = document.querySelector("#armDown");
var armLeft = document.querySelector("#armLeft");
var armRight = document.querySelector("#armRight");
var armCatch = document.querySelector("#armCatch");
var isCatch = 0; // 1이면 catch인(닫혀있는) 상태, 0이면 release인(열려있는) 상태

// 마우스 이벤트

// 클릭 시 서버에 /up으로 get 요청 전송
upArrow.addEventListener("mousedown", function () {
    upArrow.src = "img/clickedUpArrow.png";
    httpRequest.open("GET", "/up", true);
    httpRequest.send();
})

// 원상태로 복구
upArrow.addEventListener("mouseup", function () {
    upArrow.src = "img/upArrow.png";
})

// 클릭 시 서버에 /down으로 get 요청 전송
downArrow.addEventListener("mousedown", function () {
    downArrow.src = "img/clickedDownArrow.png";
    httpRequest.open("GET", "/down", true);
    httpRequest.send();
})

// 원상태로 복구
downArrow.addEventListener("mouseup", function () {
    downArrow.src = "img/downArrow.png";
})

// 클릭 시 서버에 /left로 get 요청 전송
leftArrow.addEventListener("mousedown", function () {
    leftArrow.src = "img/clickedLeftArrow.png";
    httpRequest.open("GET", "/left", true);
    httpRequest.send();
})

// 원상태로 복구
leftArrow.addEventListener("mouseup", function () {
    leftArrow.src = "img/leftArrow.png";
})

// 클릭 시 서버에 /right로 get 요청 전송
rightArrow.addEventListener("mousedown", function () {
    rightArrow.src = "img/clickedRightArrow.png";
    httpRequest.open("GET", "/right", true);
    httpRequest.send();
})

// 원상태로 복구
rightArrow.addEventListener("mouseup", function () {
    rightArrow.src = "img/rightArrow.png";
})

// 플래시라이트 클릭 시
led.addEventListener("mousedown", function () {
    if (isOn == 0) { // ledoff
        led.src = "img/clickedLed.png";
        // 서버에 /ledOn으로 get 요청 전송
        httpRequest.open("GET", "/ledOn", true);
        httpRequest.send();
        isOn = 1; // led on로 변경
    }
    else { // ledon
        led.src = "img/led.png";
        // 서버에 /ledOff로 get 요청 전송
        httpRequest.open("GET", "/ledOff", true);
        httpRequest.send();
        isOn = 0; // led off로 변경
    }
})

// 클릭 시 서버에 /armUp으로 get 요청 전송
armUp.addEventListener("mousedown", function () {
    armUp.src = "img/clickedArmUp.png";
    httpRequest.open("GET", "/armUp", true);
    httpRequest.send();
})

// 원상태로 복구
armUp.addEventListener("mouseup", function () {
    armUp.src = "img/armUp.png";
})

// 클릭 시 서버에 /armDown으로 get 요청 전송
armDown.addEventListener("mousedown", function () {
    armDown.src = "img/clickedArmDown.png";
    httpRequest.open("GET", "/armDown", true);
    httpRequest.send();
})

// 원상태로 복구
armDown.addEventListener("mouseup", function () {
    armDown.src = "img/armDown.png";
})

// 클릭 시 서버에 /armLeft로 get 요청 전송
armLeft.addEventListener("mousedown", function () {
    armLeft.src = "img/clickedArmLeft.png";
    httpRequest.open("GET", "/armLeft", true);
    httpRequest.send();
})

// 원상태로 복구
armLeft.addEventListener("mouseup", function () {
    armLeft.src = "img/armLeft.png";
})

// 클릭 시 서버에 /armRight로 get 요청 전송
armRight.addEventListener("mousedown", function () {
    armRight.src = "img/clickedArmRight.png";
    httpRequest.open("GET", "/armRight", true);
    httpRequest.send();
})

// 원상태로 복구
armRight.addEventListener("mouseup", function () {
    armRight.src = "img/armRight.png";
})

// 클릭 시
armCatch.addEventListener("mousedown", function () {
    if (isCatch == 1) { // catch(닫혀있는) 상태
        armCatch.src = "img/clickedCatch.png";
        // 서버에 /armCatch로 get 요청 전송
        httpRequest.open("GET", "/armCatch", true);
        httpRequest.send();
        isCatch = 0; // release(열리있는) 상태로 변경
    }
    else { // release(열려있는) 상태
        armCatch.src = "img/catch.png";
        // 서버에 /armRelease로 get 요청 전송
        httpRequest.open("GET", "/armRelease", true);
        httpRequest.send();
        isCatch = 1; // catch(닫혀있는) 상태로 변경
    }
})

// 방향키 이벤트
// 위 마우스 이벤트와 동일
document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);

//keydown
function keyDownHandler(e) {
    switch (e.keyCode) {
        case 37: // 왼쪽 방향키
            leftArrow.src = "img/clickedLeftArrow.png";
            httpRequest.open("GET", "/left", true);
            httpRequest.send();
            break;
        case 38: // 위쪽 방향키
            upArrow.src = "img/clickedUpArrow.png";
            httpRequest.open("GET", "/up", true);
            httpRequest.send();
            break;
        case 39: // 오른쪽 방향키
            rightArrow.src = "img/clickedRightArrow.png";
            httpRequest.open("GET", "/right", true);
            httpRequest.send();
            break;
        case 40: // 아래쪽 방향키
            downArrow.src = "img/clickedDownArrow.png";
            httpRequest.open("GET", "/down", true);
            httpRequest.send();
            break;
        case 70: // f
            if (isOn == 0) {
                led.src = "img/clickedLed.png";
                httpRequest.open("GET", "/ledOn", true);
                httpRequest.send();
                isOn = 1;
            }
            else {
                led.src = "img/led.png";
                httpRequest.open("GET", "/ledOff", true);
                httpRequest.send();
                isOn = 0;
            }
            break;
        case 87: // w
            armUp.src = "img/clickedArmUp.png";
            httpRequest.open("GET", "/armUp", true);
            httpRequest.send();
            break;
        case 65: // a
            armLeft.src = "img/clickedArmLeft.png";
            httpRequest.open("GET", "/armLeft", true);
            httpRequest.send();
            break;
        case 83: // s
            armDown.src = "img/clickedArmDown.png";
            httpRequest.open("GET", "/armDown", true);
            httpRequest.send();
            break;
        case 68: // d
            armRight.src = "img/clickedArmRight.png";
            httpRequest.open("GET", "/armRight", true);
            httpRequest.send();
            break;
        case 32: // spacebar
            if (isCatch == 1) {
                armCatch.src = "img/clickedCatch.png";
                httpRequest.open("GET", "/armCatch", true);
                httpRequest.send();
                isCatch = 0;
            }
            else {
                armCatch.src = "img/catch.png";
                httpRequest.open("GET", "/armRelease", true);
                httpRequest.send();
                isCatch = 1;
            }
            break;
    }
}

// keyup
function keyUpHandler(e) {
    switch (e.keyCode) {
        case 37: // 왼쪽 방향키
            leftArrow.src = "img/leftArrow.png";
            break;
        case 38: // 위쪽 방향키
            upArrow.src = "img/upArrow.png";
            break;
        case 39: // 오른쪽 방향키
            rightArrow.src = "img/rightArrow.png";
            break;
        case 40: // 아래쪽 방향키
            downArrow.src = "img/downArrow.png";
            break;
        case 87: // w
            armUp.src = "img/armUp.png";
            break;
        case 65: // a
            armLeft.src = "img/armLeft.png";
            break;
        case 83: // s
            armDown.src = "img/armDown.png";
            break;
        case 68: // d
            armRight.src = "img/armRight.png";
            break;
    }
}

