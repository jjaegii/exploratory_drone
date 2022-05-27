var httpRequest = new XMLHttpRequest();
var upArrow = document.querySelector('#upArrow');
var downArrow = document.querySelector('#downArrow');
var leftArrow = document.querySelector('#leftArrow');
var rightArrow = document.querySelector('#rightArrow');

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
})

leftArrow.addEventListener("mouseup", function () {
    leftArrow.src = "img/leftArrow.png";
})

rightArrow.addEventListener("mousedown", function () {
    rightArrow.src = "img/clickedRightArrow.png";
})

rightArrow.addEventListener("mouseup", function () {
    rightArrow.src = "img/rightArrow.png";
})

// 방향키 이벤트
document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);

function keyDownHandler(e) {
    switch (e.keyCode) {
        case 37:
            leftArrow.src = "img/clickedLeftArrow.png";
            break;
        case 38:
            upArrow.src = "img/clickedUpArrow.png";
            httpRequest.open("GET", "/up", true);
            httpRequest.send();
            break;
        case 39:
            rightArrow.src = "img/clickedRightArrow.png";
            break;
        case 40:
            downArrow.src = "img/clickedDownArrow.png";
            httpRequest.open("GET", "/down", true);
            httpRequest.send();
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
    }
}
