function distance() {
    const xhr = new XMLHttpRequest(); // XMLHttpRequest 인스턴스의 open(), send() 메서드를 사용하기 위해 인스턴스를 생성한다.
    
    xhr.open('GET', '/distance', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send();

    xhr.addEventListener('load', function() {
        //console.log(xhr.responseText);
        document.querySelector('#distance').innerHTML = xhr.responseText;
    })
}

setInterval(distance, 1000);