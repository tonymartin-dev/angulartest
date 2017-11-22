myApp.controller('periodicCtrl' , ['$scope', function($scope){

  //Gaps styles
  $scope.styleAfter1 = {'width':'88.88%', 'border':'none'};
  $scope.styleAfter4 = {'width':'55.55%', 'border':'none'};
  $scope.styleAfter12 = $scope.styleAfter4;

  //Elements arrays
  $scope.periodicTable = [
    {'style':$scope.style1,'styleb':$scope.style1b,'symbol':'H'},
    {'style':$scope.styleAfter1,'styleb': $scope.styleAfter1b,'symbol' : ''},
    {'style':$scope.style2,'styleb':$scope.style2b,'symbol':'He'},
    {'style':$scope.style3,'styleb':$scope.style3b,'symbol':'Li'},
    {'style':$scope.style4,'styleb':$scope.style4b,'symbol':'Be'},
    {'style':$scope.styleAfter4,'styleb': $scope.styleAfter4b,'symbol' : ''},
    {'style':$scope.style5,'styleb':$scope.style5b,'symbol':'B'},
    {'style':$scope.style6,'styleb':$scope.style6b,'symbol':'C'},
    {'style':$scope.style7,'styleb':$scope.style7b,'symbol':'N'},
    {'style':$scope.style8,'styleb':$scope.style8b,'symbol':'O'},
    {'style':$scope.style9,'styleb':$scope.style9b,'symbol':'F'},
    {'style':$scope.style10,'styleb':$scope.style10b,'symbol':'Ne'},
    {'style':$scope.style11,'styleb':$scope.style11b,'symbol':'Na'},
    {'style':$scope.style12,'styleb':$scope.style12b,'symbol':'Mg'},
    {'style':$scope.styleAfter12,'styleb': $scope.styleAfter12b,'symbol' : ''},
    {'style':$scope.style13,'styleb':$scope.style13b,'symbol':'Al'},
    {'style':$scope.style14,'styleb':$scope.style14b,'symbol':'Si'},
    {'style':$scope.style15,'styleb':$scope.style15b,'symbol':'P'},
    {'style':$scope.style16,'styleb':$scope.style16b,'symbol':'S'},
    {'style':$scope.style17,'styleb':$scope.style17b,'symbol':'Cl'},
    {'style':$scope.style18,'styleb':$scope.style18b,'symbol':'Ar'},
    {'style':$scope.style19,'styleb':$scope.style19b,'symbol':'K'},
    {'style':$scope.style20,'styleb':$scope.style20b,'symbol':'Ca'},
    {'style':$scope.style21,'styleb':$scope.style21b,'symbol':'Sc'},
    {'style':$scope.style22,'styleb':$scope.style22b,'symbol':'Ti'},
    {'style':$scope.style23,'styleb':$scope.style23b,'symbol':'V'},
    {'style':$scope.style24,'styleb':$scope.style24b,'symbol':'Cr'},
    {'style':$scope.style25,'styleb':$scope.style25b,'symbol':'Mn'},
    {'style':$scope.style26,'styleb':$scope.style26b,'symbol':'Fe'},
    {'style':$scope.style27,'styleb':$scope.style27b,'symbol':'Co'},
    {'style':$scope.style28,'styleb':$scope.style28b,'symbol':'Ni'},
    {'style':$scope.style29,'styleb':$scope.style29b,'symbol':'Cu'},
    {'style':$scope.style30,'styleb':$scope.style30b,'symbol':'Zn'},
    {'style':$scope.style31,'styleb':$scope.style31b,'symbol':'Ga'},
    {'style':$scope.style32,'styleb':$scope.style32b,'symbol':'Ge'},
    {'style':$scope.style33,'styleb':$scope.style33b,'symbol':'As'},
    {'style':$scope.style34,'styleb':$scope.style34b,'symbol':'Se'},
    {'style':$scope.style35,'styleb':$scope.style35b,'symbol':'Br'},
    {'style':$scope.style36,'styleb':$scope.style36b,'symbol':'Kr'},
    {'style':$scope.style37,'styleb':$scope.style37b,'symbol':'Rb'},
    {'style':$scope.style38,'styleb':$scope.style38b,'symbol':'Sr'},
    {'style':$scope.style39,'styleb':$scope.style39b,'symbol':'Y'},
    {'style':$scope.style40,'styleb':$scope.style40b,'symbol':'Zr'},
    {'style':$scope.style41,'styleb':$scope.style41b,'symbol':'Nb'},
    {'style':$scope.style42,'styleb':$scope.style42b,'symbol':'Mo'},
    {'style':$scope.style43,'styleb':$scope.style43b,'symbol':'Tc'},
    {'style':$scope.style44,'styleb':$scope.style44b,'symbol':'Ru'},
    {'style':$scope.style45,'styleb':$scope.style45b,'symbol':'Rh'},
    {'style':$scope.style46,'styleb':$scope.style46b,'symbol':'Pd'},
    {'style':$scope.style47,'styleb':$scope.style47b,'symbol':'Ag'},
    {'style':$scope.style48,'styleb':$scope.style48b,'symbol':'Cd'},
    {'style':$scope.style49,'styleb':$scope.style49b,'symbol':'In'},
    {'style':$scope.style50,'styleb':$scope.style50b,'symbol':'Sn'},
    {'style':$scope.style51,'styleb':$scope.style51b,'symbol':'Sb'},
    {'style':$scope.style52,'styleb':$scope.style52b,'symbol':'Te'},
    {'style':$scope.style53,'styleb':$scope.style53b,'symbol':'I'},
    {'style':$scope.style54,'styleb':$scope.style54b,'symbol':'Xe'},
    {'style':$scope.style55,'styleb':$scope.style55b,'symbol':'Cs'},
    {'style':$scope.style56,'styleb':$scope.style56b,'symbol':'Ba'},
    {'style':$scope.style57,'styleb':$scope.style57b,'symbol':'La'},
    {'style':$scope.style72,'styleb':$scope.style72b,'symbol':'Hf'},
    {'style':$scope.style73,'styleb':$scope.style73b,'symbol':'Ta'},
    {'style':$scope.style74,'styleb':$scope.style74b,'symbol':'W'},
    {'style':$scope.style75,'styleb':$scope.style75b,'symbol':'Re'},
    {'style':$scope.style76,'styleb':$scope.style76b,'symbol':'Os'},
    {'style':$scope.style77,'styleb':$scope.style77b,'symbol':'Ir'},
    {'style':$scope.style78,'styleb':$scope.style78b,'symbol':'Pt'},
    {'style':$scope.style79,'styleb':$scope.style79b,'symbol':'Au'},
    {'style':$scope.style80,'styleb':$scope.style80b,'symbol':'Hg'},
    {'style':$scope.style81,'styleb':$scope.style81b,'symbol':'Tl'},
    {'style':$scope.style82,'styleb':$scope.style82b,'symbol':'Pb'},
    {'style':$scope.style83,'styleb':$scope.style83b,'symbol':'Bi'},
    {'style':$scope.style84,'styleb':$scope.style84b,'symbol':'Po'},
    {'style':$scope.style85,'styleb':$scope.style85b,'symbol':'At'},
    {'style':$scope.style86,'styleb':$scope.style86b,'symbol':'Rn'},
    {'style':$scope.style87,'styleb':$scope.style87b,'symbol':'Fr'},
    {'style':$scope.style88,'styleb':$scope.style88b,'symbol':'Ra'},
    {'style':$scope.style89,'styleb':$scope.style89b,'symbol':'Ac'},
    {'style':$scope.style104,'styleb':$scope.style104b,'symbol':'Rf'},
    {'style':$scope.style105,'styleb':$scope.style105b,'symbol':'Db'},
    {'style':$scope.style106,'styleb':$scope.style106b,'symbol':'Sg'},
    {'style':$scope.style107,'styleb':$scope.style107b,'symbol':'Bh'},
    {'style':$scope.style108,'styleb':$scope.style108b,'symbol':'Hs'},
    {'style':$scope.style109,'styleb':$scope.style109b,'symbol':'Mt'},
    {'style':$scope.style110,'styleb':$scope.style110b,'symbol':'Ds'},
    {'style':$scope.style111,'styleb':$scope.style111b,'symbol':'Rg'},
    {'style':$scope.style112,'styleb':$scope.style112b,'symbol':'Cn'},
    {'style':$scope.style113,'styleb':$scope.style113b,'symbol':'Nh'},
    {'style':$scope.style114,'styleb':$scope.style114b,'symbol':'Fl'},
    {'style':$scope.style115,'styleb':$scope.style115b,'symbol':'Mc'},
    {'style':$scope.style116,'styleb':$scope.style116b,'symbol':'Lv'},
    {'style':$scope.style117,'styleb':$scope.style117b,'symbol':'Ts'},
    {'style':$scope.style118,'styleb':$scope.style118b,'symbol':'Og'}
  ];
  $scope.periodicLantActin = [
    {'style':$scope.style58,'styleb':$scope.style58b,'symbol':'Ce'},
    {'style':$scope.style59,'styleb':$scope.style59b,'symbol':'Pr'},
    {'style':$scope.style60,'styleb':$scope.style60b,'symbol':'Nd'},
    {'style':$scope.style61,'styleb':$scope.style61b,'symbol':'Pm'},
    {'style':$scope.style62,'styleb':$scope.style62b,'symbol':'Sm'},
    {'style':$scope.style63,'styleb':$scope.style63b,'symbol':'Eu'},
    {'style':$scope.style64,'styleb':$scope.style64b,'symbol':'Gd'},
    {'style':$scope.style65,'styleb':$scope.style65b,'symbol':'Tb'},
    {'style':$scope.style66,'styleb':$scope.style66b,'symbol':'Dy'},
    {'style':$scope.style67,'styleb':$scope.style67b,'symbol':'Ho'},
    {'style':$scope.style68,'styleb':$scope.style68b,'symbol':'Er'},
    {'style':$scope.style69,'styleb':$scope.style69b,'symbol':'Tm'},
    {'style':$scope.style70,'styleb':$scope.style70b,'symbol':'Yb'},
    {'style':$scope.style71,'styleb':$scope.style71b,'symbol':'Lu'},
    {'style':$scope.style90,'styleb':$scope.style90b,'symbol':'Th'},
    {'style':$scope.style91,'styleb':$scope.style91b,'symbol':'Pa'},
    {'style':$scope.style92,'styleb':$scope.style92b,'symbol':'U'},
    {'style':$scope.style93,'styleb':$scope.style93b,'symbol':'Np'},
    {'style':$scope.style94,'styleb':$scope.style94b,'symbol':'Pu'},
    {'style':$scope.style95,'styleb':$scope.style95b,'symbol':'Am'},
    {'style':$scope.style96,'styleb':$scope.style96b,'symbol':'Cm'},
    {'style':$scope.style97,'styleb':$scope.style97b,'symbol':'Bk'},
    {'style':$scope.style98,'styleb':$scope.style98b,'symbol':'Cf'},
    {'style':$scope.style99,'styleb':$scope.style99b,'symbol':'Es'},
    {'style':$scope.style100,'styleb':$scope.style100b,'symbol':'Fm'},
    {'style':$scope.style101,'styleb':$scope.style101b,'symbol':'Md'},
    {'style':$scope.style102,'styleb':$scope.style102b,'symbol':'No'},
    {'style':$scope.style103,'styleb':$scope.style103b,'symbol':'Lr'},
  ];

  //Watch changes in
  $scope.$watch('element1', function(newValue, oldValue){
    if ($scope.element1 === '') {
      $scope.style1 ={'background-color':'white'};
    }else if ($scope.element1 === 'H') {
      $scope.style1 ={'background-color':'green', 'color':'white'};
    }else{
      $scope.style1 ={'background-color':'red', 'color':'white'};
    }
  });


}]);
