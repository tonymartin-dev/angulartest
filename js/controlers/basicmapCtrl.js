myApp.controller('basicmapCtrl' , ['$scope', function($scope){

  //Create the map
  $scope.map = new ol.Map({
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

}]);
