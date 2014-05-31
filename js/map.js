var osm = L.tileLayer('http://{s}.tile2.opencyclemap.org/transport/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors,' +
            'tiles from <a href="http://www.opencyclemap.org/">OpenCycleMap</a>'
    });

var map = L.map('map', {
	center: [47.6210, -122.3328],
	zoom: 13,
	layers: [osm]
});

L.circle([47.60383, -122.33006], 100).addTo(map);
