myApp.directive ('ngList', function(){
  return {
    restrict: 'E',
    templateUrl: 'js/directives/list.html',
    scope: {
      element: '=info'
    }
  };
});
