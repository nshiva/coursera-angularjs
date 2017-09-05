(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  //$scope.lunchList = lunchList;
  $scope.result="";
  

 
  $scope.displayMessage = function () {

    var items;
     //var lunch_list = lunchList.split(",");

    if($scope.lunchList){
      $scope.lunchList = $scope.lunchList.trim();
      items = $scope.lunchList.split(",");
      
      if(items.length<=3)
      {
        $scope.result= "Enjoy!";
      }
      else{
        $scope.result= "Too much!";
      }  
   }
   else {
    $scope.result= "Please enter data first";

   }
    
    //return "Yaakov likes to eat healthy snacks at night!";
  };

  $scope.feedYaakov = function () {
    $scope.stateOfBeing = "fed";
  };
}

})();
