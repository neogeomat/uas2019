// Define map attribution variable
var mbAttr = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
    '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
    'Imagery � <a href="http://mapbox.com">Mapbox</a>'

// Define basemap source URL
var mbUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibmdhdmlzaCIsImEiOiJjaXFheHJmc2YwMDdoaHNrcWM4Yjhsa2twIn0.8i1Xxwd1XifUU98dGE9nsQ';

// Define baselayers
var grayscale = L.tileLayer(mbUrl, {
    id: 'mapbox.light',
    attribution: mbAttr,
    maxZoom: 22,
    maxNativeZoom: 18
})
var streets = L.tileLayer(mbUrl, {
    id: 'mapbox.streets',
    attribution: mbAttr,
    maxZoom: 22,
    maxNativeZoom: 18
})
var outdoors = L.tileLayer(mbUrl, {
    id: 'mapbox.outdoors',
    attribution: mbAttr,
    maxZoom: 22,
    maxNativeZoom: 18
})
var satellite = L.tileLayer(mbUrl, {
    id: 'mapbox.satellite',
    attribution: mbAttr,
    maxZoom: 22,
    maxNativeZoom: 18
})
var dark = L.tileLayer(mbUrl, {
    id: 'mapbox.dark',
    attribution: mbAttr,
    maxZoom: 22,
    maxNativeZoom: 18
})
var satellitestreets = L.tileLayer(mbUrl, {
    id: 'mapbox.streets-satellite',
    attribution: mbAttr,
    maxZoom: 22,
    maxNativeZoom: 18
});

///////////////////////Map object + Features/////////////////////////

// Main map object
var map = L.map('map', {
    center: [51.944990, 7.572810],
    zoom: 17,
    layers: [satellite],
    maxZoom: 22,
    maxNativeZoom: 18
});

// Map default extent
var mapHome = {
    lat: 51.944990,
    lng: 7.572810,
    zoom: 17
};

// Center on AOI button
L.easyButton('<span><img src="./assets/resources/icons/meeting-point-32.png" style="width: 15px; height: 15px;"></img></span>', function(btn, map) {
    map.setView([mapHome.lat, mapHome.lng], mapHome.zoom);
}, 'Zoom To Home', {
    position: 'bottomright'
}).addTo(map);

// Add legend button
var legendBt = L.easyButton('<p style="font-size:15px;">Info</p>', function() {
    var x = document.getElementById("legendDiv");
    if (x.style.display === "none") {
        x.style.display = "inline-block";
    } else {
        x.style.display = "none";
    }
}, 'Show Legend', {
    position: 'topleft'
}).addTo(map);

legendBt.button.style.width = '40px';

// Include basemap layers when the app initiates
var baseLayers = {
    "Imagery": satellite,
    "Streets": streets,
    "Gray": dark
};