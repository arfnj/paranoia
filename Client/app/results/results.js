angular.module('results', [])

.controller('ResultsController', function ($scope, $rootScope) {

  $rootScope
  console.log($rootScope.quakeData)
  $scope.numQuakes = $rootScope.quakeData.length;
  console.log('numquakes: ', $scope.numQuakes);

  $scope.Arrests = $rootScope.nflArrests;
  $scope.Team = $rootScope.nflTeam;

});
