

//
//     // google.maps.event.addListener(map, 'click', function(event) {
//     //     addMarker(event.latLng, map);
//     // });
// }


var map;
var markers = [];
var city = ["Świnoujście", "Miedzyzdroje", "Dziwnów", "Pustkowo", "Mrzeżyno", "Kołobrzeg", "Sarbinowo", "Łazy", "Darłowo", "Jarosławiec", "Ustka"];
var cityIndex = 0;
var cityLabelIndex = 0;
var cityLabel = ["Świnoujście", "Miedzyzdroje", "Dziwnów", "Pustkowo", "Mrzeżyno", "Kołobrzeg", "Sarbinowo", "Łazy", "Darłowo", "Jarosławiec", "Ustka"];

function initMap() {
    var lat_lng = {lat: 53.91053, lng: 14.24712};
    var markersLatLng = [
         {lat: 53.91053, lng: 14.24712},
         {lat: 53.92921, lng: 14.45097},
         {lat: 54.02819, lng: 14.76691},
         {lat: 54.06834, lng: 14.97019},
         {lat: 54.13929, lng: 15.28098},
         {lat: 54.10539, lng: 15.35005},
         {lat: 54.24896, lng: 15.95603},
         {lat: 54.30261, lng: 16.18433}]
    ;

    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 7,
        center: lat_lng,
        map: map

    });

    // Adds a marker at the center of the map.
    for (var i = 0; i < markersLatLng.length; i++) {
        var lat_lng = new google.maps.LatLng(markersLatLng[i].lat,markersLatLng[i].lng);
        addMarker(lat_lng);
    }
}

// Adds a marker to the map and push to the array.
function addMarker(location) {
    var marker = new google.maps.Marker({
        position: location,
        label: city[cityIndex++ % city.length],
        title: cityLabel[cityLabelIndex++ % cityLabel.length],

        map: map
    });
   markers.push(marker);

}

//slider z miejscowościami-podłączyć linki i własne info
//header
//footer