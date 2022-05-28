function myMap() {
      const xhr = new XMLHttpRequest(); // XMLHttpRequest 인스턴스의 open(), send() 메서드를 사용하기 위해 인스턴스를 생성한다.
      var gps = document.querySelector("#gps");

      xhr.open('GET', '/gps', true);
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.send();
  
      xhr.addEventListener('load', function() {
          console.log(xhr.responseText);
          gps.innerHTML = xhr.responseText;
      })
      let tmp = gps.innerHTML;
      let xarr = tmp.split(" ");
      let yarr = xarr[1].split("\n");
      
      let x = parseFloat(xarr[0]);
      let y = parseFloat(yarr[0]);
      console.log("x : " + x);
      console.log("y : " + y)
      if(x === undefined || y === undefined) {
            var mapOptions = {
                  center: new google.maps.LatLng(35.83063, 128.75475),
                  zoom: 18,
                  disableDefaultUI: true,
                  mapTypeId: google.maps.MapTypeId.HYBRID
              };
            gps.innerHTML = "35.83063, 128.75475";
      }
      else {
            var mapOptions = {
                  center: new google.maps.LatLng(x, y),
                  zoom: 18,
                  disableDefaultUI: true,
                  mapTypeId: google.maps.MapTypeId.HYBRID
              };
      }

      let map = new google.maps.Map(document.getElementById("googleMap")
      , mapOptions);
  }
  
  setInterval(myMap, 10000);