var myApp = angular.module('myApp' , []);

myApp.config(function($routeProvider){
  $routeProvider
  .when('/', {
    controller : 'myController',
    templateUrl : 'views/home.html'
  })
  .when('/calculator' , {
    controller : 'myController',
    templateUrl : 'views/calculator.html'
  })
  .when('/filters' , {
    controller : 'myController',
    templateUrl : 'views/filters.html'
  })
  .when('/lists' , {
    controller : 'myController',
    templateUrl : 'views/lists.html'
  })
  .when('/directives' , {
    controller : 'myController',
    templateUrl : 'views/mydirectives.html'
  })
  .when('/periodic' , {
    controller : 'periodicCtrl',
    templateUrl : 'views/periodic.html'
  })
  .when('/maps/basicmap' , {
    controller : 'basicmapCtrl',
    templateUrl : 'views/basicmap.html'
  })
  .when('/maps/stamenmap' , {
    controller : 'basicmapstamenmapCtrl',
    templateUrl : 'views/stamenmap.html'
  })
   .otherwise({redirectTo:'/'});
});
