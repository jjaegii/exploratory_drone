function myMap(){
      var mapOptions = { 
            center:new google.maps.LatLng(35.83063, 128.75475),
            zoom:18,
            disableDefaultUI:true,
            mapTypeId: google.maps.MapTypeId.HYBRID
      };
  
      var map = new google.maps.Map(document.getElementById("googleMap") 
            , mapOptions );
      
}