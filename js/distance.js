function distance() {
    const xhr = new XMLHttpRequest(); // HTTP 통신에 사용하는 XMLHttpRequest 인스턴스의 open(), send() 메서드를 사용하기 위해 인스턴스를 생성한다.
   
    // 서버에 /distance로 get 요청 보내기
    xhr.open('GET', '/distance', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send();

    // 서버에서 거리 값이 왔을 때
    xhr.addEventListener('load', function() {
        // control.html에 거리 값 출력
        document.querySelector('#distance').innerHTML = xhr.responseText;
    })
}

// 1초마다 갱신
setInterval(distance, 1000);