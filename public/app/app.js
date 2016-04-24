angular.module('myApp', [])

.controller('mainController', function($scope, $http) {

  $scope.getData = function () {
    $http.get('/api/data')
      .then(function(response){
         $scope.items = response.data;
      })
  }
  $scope.serialize = function (){
    $http.get('/api/data')
      .then(function(response) {
        $scope.responseString = JSON.stringify(response.data);
        return $scope.responseString;
      });
  }

  $scope.getData();
})
