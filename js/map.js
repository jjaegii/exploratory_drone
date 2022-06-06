var beforeX = parseFloat("35.83063");
var beforeY = parseFloat("128.75474");
var idx = 0; // 0이면 값이 없는 상태, 1이면 값이 있는 상태

function myMap() {
      const xhr = new XMLHttpRequest(); // XMLHttpRequest 인스턴스의 open(), send() 메서드를 사용하기 위해 인스턴스를 생성한다.
      var gps = document.querySelector("#gps");

      xhr.open('GET', '/gps', true);
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.send();

      xhr.addEventListener('load', function () {
            console.log("responseText : " + xhr.responseText);
            if(xhr.responseText.length == 0 || xhr.responseText.length == 1) { // 값이 없을때
                  gps.innerHTML = beforeX + " " + beforeY;
                  idx = 0;
            }
            else { // 값이 있을때
                  gps.innerHTML = xhr.responseText;
                  var tmp = xhr.responseText.split(" ");
                  var x = parseFloat(tmp[0]);
                  var y = parseFloat(tmp[1]);
                  idx = 1;
                  beforeX = x;
                  beforeY = y;
            }
      })
      if(idx == 0) {
            var coordinates = new google.maps.LatLng(beforeX, beforeY);
      }
      else {
            var coordinates = new google.maps.LatLng(x, y);
      }
      var mapOptions = {
            center: coordinates,
            zoom: 18,
            disableDefaultUI: true,
            mapTypeId: google.maps.MapTypeId.HYBRID
      };
      let map = new google.maps.Map(document.getElementById("googleMap"), mapOptions);
      let marker = new google.maps.Marker({ position: coordinates, map: map });
      marker.setMap(map);
}

setInterval(myMap, 10000);