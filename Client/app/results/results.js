angular.module('results', [])

.controller('ResultsController', function ($scope, Stats) {

  $scope.numQuakes = Stats.quakeData.length;
  $scope.Arrests = Stats.nflArrests;
  $scope.Team = Stats.nflTeam;

});
