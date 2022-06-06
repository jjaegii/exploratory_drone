var httpRequest = new XMLHttpRequest();

var upArrow = document.querySelector('#upArrow');
var downArrow = document.querySelector('#downArrow');
var leftArrow = document.querySelector('#leftArrow');
var rightArrow = document.querySelector('#rightArrow');
var led = document.querySelector('#led');
var isOn = 0; // 1이면 ledon인 상태, 0이면 ledoff인 상태

var armUp = document.querySelector("#armUp");
var armDown = document.querySelector("#armDown");
var armLeft = document.querySelector("#armLeft");
var armRight = document.querySelector("#armRight");
var armCatch = document.querySelector("#armCatch");
var isCatch = 0; // 1이면 catch인 상태, 0이면 release인 상태

// 마우스 이벤트
upArrow.addEventListener("mousedown", function () {
    upArrow.src = "img/clickedUpArrow.png";
    httpRequest.open("GET", "/up", true);
    httpRequest.send();
})

upArrow.addEventListener("mouseup", function () {
    upArrow.src = "img/upArrow.png";
})

downArrow.addEventListener("mousedown", function () {
    downArrow.src = "img/clickedDownArrow.png";
    httpRequest.open("GET", "/down", true);
    httpRequest.send();
})

downArrow.addEventListener("mouseup", function () {
    downArrow.src = "img/downArrow.png";
})

leftArrow.addEventListener("mousedown", function () {
    leftArrow.src = "img/clickedLeftArrow.png";
    httpRequest.open("GET", "/left", true);
    httpRequest.send();
})

leftArrow.addEventListener("mouseup", function () {
    leftArrow.src = "img/leftArrow.png";
})

rightArrow.addEventListener("mousedown", function () {
    rightArrow.src = "img/clickedRightArrow.png";
    httpRequest.open("GET", "/right", true);
    httpRequest.send();
})

rightArrow.addEventListener("mouseup", function () {
    rightArrow.src = "img/rightArrow.png";
})

led.addEventListener("mousedown", function () {
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
})

armUp.addEventListener("mousedown", function () {
    armUp.src = "img/clickedArmUp.png";
    httpRequest.open("GET", "/armUp", true);
    httpRequest.send();
})

armUp.addEventListener("mouseup", function () {
    armUp.src = "img/armUp.png";
})

armDown.addEventListener("mousedown", function () {
    armDown.src = "img/clickedArmDown.png";
    httpRequest.open("GET", "/armDown", true);
    httpRequest.send();
})

armDown.addEventListener("mouseup", function () {
    armDown.src = "img/armDown.png";
})

armLeft.addEventListener("mousedown", function () {
    armLeft.src = "img/clickedArmLeft.png";
    httpRequest.open("GET", "/armLeft", true);
    httpRequest.send();
})

armLeft.addEventListener("mouseup", function () {
    armLeft.src = "img/armLeft.png";
})

armRight.addEventListener("mousedown", function () {
    armRight.src = "img/clickedArmRight.png";
    httpRequest.open("GET", "/armRight", true);
    httpRequest.send();
})

armRight.addEventListener("mouseup", function () {
    armRight.src = "img/armRight.png";
})

armCatch.addEventListener("mousedown", function () {
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
})

// 방향키 이벤트
document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);

function keyDownHandler(e) {
    switch (e.keyCode) {
        case 37:
            leftArrow.src = "img/clickedLeftArrow.png";
            httpRequest.open("GET", "/left", true);
            httpRequest.send();
            break;
        case 38:
            upArrow.src = "img/clickedUpArrow.png";
            httpRequest.open("GET", "/up", true);
            httpRequest.send();
            break;
        case 39:
            rightArrow.src = "img/clickedRightArrow.png";
            httpRequest.open("GET", "/right", true);
            httpRequest.send();
            break;
        case 40:
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

function keyUpHandler(e) {
    switch (e.keyCode) {
        case 37:
            leftArrow.src = "img/leftArrow.png";
            break;
        case 38:
            upArrow.src = "img/upArrow.png";
            break;
        case 39:
            rightArrow.src = "img/rightArrow.png";
            break;
        case 40:
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

