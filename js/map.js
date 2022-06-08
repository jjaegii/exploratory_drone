// 초기값
var beforeX = parseFloat("0.00000");
var beforeY = parseFloat("0.00000");

var idx = 0; // 0이면 값이 없는 상태, 1이면 값이 있는 상태

function myMap() {
    const xhr = new XMLHttpRequest(); // HTTP 통신에 사용하는 XMLHttpRequest 인스턴스의 open(), send() 메서드를 사용하기 위해 인스턴스를 생성한다.
    var gps = document.querySelector("#gps"); // control.html의 gps 좌표 값 출력 부분

    // 서버에 /gps로 get 요청 보내기
    xhr.open('GET', '/gps', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send();

    // 서버에서 좌표 값이 왔을 때
    xhr.addEventListener('load', function () {
        console.log("responseText : " + xhr.responseText);
        if (xhr.responseText.length == 0 || xhr.responseText.length == 1) { // 값이 없을때
            gps.innerHTML = beforeX + " " + beforeY; // 직전 좌표 값 다시 사용
            idx = 0;
        }
        else { // 값이 있을때
            gps.innerHTML = xhr.responseText;
           
            // 0.00000 0.00000 형식이기때문에 x와 y로 나눠줌
            var tmp = xhr.responseText.split(" ");
            var x = parseFloat(tmp[0]);
            var y = parseFloat(tmp[1]);
            idx = 1;

            // 직전 좌표 값에 현재 좌표 값 저장
            beforeX = x;
            beforeY = y;
        }
    })

    // 지도 좌표 값 설정
    if (idx == 0) { // 좌표 값이 없을 때
        var coordinates = new google.maps.LatLng(beforeX, beforeY);
    }
    else { // 좌표 값이 있을 때
        var coordinates = new google.maps.LatLng(x, y);
    }

    // 지도 설정
    var mapOptions = {
        center: coordinates,
        zoom: 18,
        disableDefaultUI: true,
        mapTypeId: google.maps.MapTypeId.HYBRID
    };
   
    // control.html에 지도 출력
    let map = new google.maps.Map(document.getElementById("googleMap"), mapOptions);
   
    // 지도의 핀(마커) 설정
    let marker = new google.maps.Marker({ position: coordinates, map: map });
    marker.setMap(map);
}

// 10초마다 갱신
setInterval(myMap, 10000);