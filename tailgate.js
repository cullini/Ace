// create a map in the "map" div
// set the view to central ohio and zoom
var map = L.map('map').setView([40, -83], 5);

// create an OpenStreetMap WB tile layer
var osmBW = L.tileLayer('http://{s}.www.toolserver.org/tiles/bw-mapnik/{z}/{x}/{y}.png', {
    attribution: '© <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
});

var Stamen_TonerLite = L.tileLayer('http://{s}.tile.stamen.com/toner-lite/{z}/{x}/{y}.png', {
    attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> — Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
    subdomains: 'abcd',
    minZoom: 0,
    maxZoom: 20
});

var danger1 = L.tileLayer.wms("https://g5201.brushhome.org/cgi-bin/mapserv?map=/var/files/5201/all.map", {
    layers: 'danger1', 
    format: 'image/png',
    transparent: true, 
    attribution: "DangerZone"
});

var danger2 = L.tileLayer.wms("https://g5201.brushhome.org/cgi-bin/mapserv?map=/var/files/5201/all.map", {
    layers: 'danger2', 
    format: 'image/png',
    transparent: true, 
    attribution: "DangerZone_2"
});

var p_2013 = L.tileLayer.wms("https://g5201.brushhome.org/cgi-bin/mapserv?map=/var/files/5201/all.map", {
    layers: 'p_2013', 
    format: 'image/png',
    transparent: true, 
    attribution: "2013"
});

var p_2012 = L.tileLayer.wms("https://g5201.brushhome.org/cgi-bin/mapserv?map=/var/files/5201/all.map", {
    layers: 'p_2012', 
    format: 'image/png',
    transparent: true, 
    attribution: "2012"
});

var p_2011 = L.tileLayer.wms("https://g5201.brushhome.org/cgi-bin/mapserv?map=/var/files/5201/all.map", {
    layers: 'p_2011', 
    format: 'image/png',
    transparent: true, 
    attribution: "2011"
});

var p_2010 = L.tileLayer.wms("https://g5201.brushhome.org/cgi-bin/mapserv?map=/var/files/5201/all.map", {
    layers: 'p_2010', 
    format: 'image/png',
    transparent: true, 
    attribution: "2010"
});

var p_2009 = L.tileLayer.wms("https://g5201.brushhome.org/cgi-bin/mapserv?map=/var/files/5201/all.map", {
    layers: 'p_2009', 
    format: 'image/png',
    transparent: true, 
    attribution: "2009"
});

var p_2008 = L.tileLayer.wms("https://g5201.brushhome.org/cgi-bin/mapserv?map=/var/files/5201/all.map", {
    layers: 'p_2008', 
    format: 'image/png',
    transparent: true, 
    attribution: "2008"
});

var p_2007 = L.tileLayer.wms("https://g5201.brushhome.org/cgi-bin/mapserv?map=/var/files/5201/all.map", {
    layers: 'p_2007', 
    format: 'image/png',
    transparent: true, 
    attribution: "2007"
});

var p_2006 = L.tileLayer.wms("https://g5201.brushhome.org/cgi-bin/mapserv?map=/var/files/5201/all.map", {
    layers: 'p_2006', 
    format: 'image/png',
    transparent: true, 
    attribution: "2006"
});

var baseMaps = {
    "OpenStreetMap B/W": osmBW,
    "Stamen Toner Lite": Stamen_TonerLite
};

var overlayMaps = {
    "Danger Zone": danger1,
    "2013": p_2013,
	"2012": p_2012,
	"2011": p_2011,
	"2010": p_2010,
	"2009": p_2009,
	"2008": p_2008,
	"2007": p_2007,
	"2006": p_2006,
};

map.addLayer(osmBW, true);

var layersControl = new L.Control.Layers(baseMaps, overlayMaps, {
    collapsed: !L.Browser.touch
});

map.addControl(layersControl);
