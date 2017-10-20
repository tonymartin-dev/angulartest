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
   .otherwise({redirectTo:'/'});
});
