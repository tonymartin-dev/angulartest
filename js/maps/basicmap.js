// Create latitude and longitude and convert them to default projection (switch order from Google)
var granada = ol.proj.transform([-3.6262912, 37.1809411], 'EPSG:4326', 'EPSG:3857');
var malaga = ol.proj.transform([-4.5642727, 36.7647499], 'EPSG:4326', 'EPSG:3857');
var jaen = ol.proj.transform([-3.8143746, 37.7800931], 'EPSG:4326', 'EPSG:3857');

/*
Basic map
*/

//Create the map
var map = new ol.Map({
  //Layers: they set what is shown
  layers: [
    new ol.layer.Tile({
       source: new ol.source.OSM()
    })
  ],
  //Target: set which element ID will carry the map
   target: 'map1',
   //View: set the options on the map (coordinates, zoom,...)
   view: new ol.View({
     //Coordinates need to be converted into WebMercator projection
     center: granada,
     zoom: 12
   })
});
