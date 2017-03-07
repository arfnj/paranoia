angular.module('results', [])

.controller('ResultsController', function ($scope,$rootScope) {

  $scope.numQuakes = $rootScope.quakeData.length;
  $rootScope.quakeData = [];

  $scope.Arrests = $rootScope.nflArrests;
  $scope.Team = $rootScope.nflTeam;



});
