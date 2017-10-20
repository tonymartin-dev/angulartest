
myApp.controller('myController' , ['$scope', function($scope){

  //CALCULATOR
  //Adding and substracting with buttons
  $scope.number = 0;

  $scope.add = function(value) {
    $scope.number = $scope.number + value;
  };

  $scope.substract = function(value) {
    $scope.number = $scope.number - value;
  };

  //Operating with fields
  $scope.operate = function(num1, op, num2){
    if (op == '+'){
      $scope.result = num1 + num2;
    }else if (op == '-'){
      $scope.result = num1 - num2;
    }else if (op == '*'){
      $scope.result = num1 * num2;
    }else if (op == '/'){
      $scope.result = num1 / num2;
    }
  };

  //LISTS
  $scope.writers = ['Tolkien', 'Follet', 'Ende', 'King'];
  $scope.singers = [{name: 'Lemmy'}, {name: 'Elvis'}, {name: 'Aretha'}, { name: 'Ella'}];
  $scope.friends = [{name: 'Manolo'}, {name: 'Juanilllo'}, {name: 'Eustaquia'}, { name: 'Mariflower'}];
  $scope.people = {'John' : '24', 'Hannah' : '43', 'Fred' : '12', 'Sarah' : '86'};

}]);
