
myApp.controller("filter-people", function($scope){

  $scope.people = {
    'Larry': {'age':'12', 'gender':'male'},
    'Melinda': {'age':'25', 'gender':'female'}
  };

  $scope.male = true;
  $scope.female = true;

  $scope.setGender = function (info){
    if (info == 'male'){
      $scope.male = true;
      $scope.female = false;
    } else if (info == 'female'){
      $scope.male = false;
      $scope.female = true;
    } else {
      $scope.male = true;
      $scope.female = true;
    }
  };

  $scope.setmale = true;
  $scope.setfemale = false;

  $scope.setGender2 = function (gender){
    if (gender == 'male'){
      $scope.setmale = true;
      $scope.setfemale = false;
    } else if (gender == 'female') {
      $scope.setmale = false;
      $scope.setfemale = true;
    } else {
      $scope.setmale = true;
      $scope.setfemale = true;
    }
  };


});
