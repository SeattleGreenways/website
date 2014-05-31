var osm = L.tileLayer('http://{s}.tile2.opencyclemap.org/transport/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors,' +
            'tiles from <a href="http://www.opencyclemap.org/">OpenCycleMap</a>'
    });

var map = L.map('map', {
	center: [47.60383, -122.33006],
	zoom: 18,
	layers: [osm]
});

var marker;

function makeMarker(r){
	
	marker = new L.circle([47.60383, -122.33006],r).addTo(map);
	marker.bindPopup("<b>Current Count:</b> " + r);
	
	}

