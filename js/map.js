var beforeX = parseFloat("35.83063");
var beforeY = parseFloat("128.75474");

function myMap() {
      const xhr = new XMLHttpRequest(); // XMLHttpRequest 인스턴스의 open(), send() 메서드를 사용하기 위해 인스턴스를 생성한다.
      var gps = document.querySelector("#gps");

      xhr.open('GET', '/gps', true);
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.send();

      xhr.addEventListener('load', function () {
            console.log("responseText : " + xhr.responseText);
            if (xhr.responseText == "") {
                  gps.innerHTML = beforeX + " " + beforeY;
            }
            else {
                  gps.innerHTML = xhr.responseText;
            }
      })
      let tmp = gps.innerHTML;
      let arr = tmp.split(" ");
      console.log("arr : " + arr);

      let x = parseFloat(arr[0]);
      let y = parseFloat(arr[1]);
      console.log("x : " + x);
      console.log("y : " + y)
      if (isNaN(x) || isNaN(y)) {
            var coordinates = new google.maps.LatLng(beforeX, beforeY);
      }
      else {
            var coordinates = new google.maps.LatLng(x, y);
            console.log("beforeX : " + beforeX + " beforeY : " + beforeY);
            beforeX = x;
            beforeY = y;
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