angular.module('paranoia', ['results','ngRoute'])

.config(function ($routeProvider, $httpProvider) {
  $routeProvider
    .when('/results', {
      templateUrl: 'app/results/results.html',
      controller: 'ResultsController'
    })
    .otherwise({
      redirectTo: '/'
    });
})

.controller('ParanoiaController', function ($scope,$location,$http,$rootScope) {

  $scope.getData = function () {
    $scope.zipSearch = '/'+$scope.zipCode+'/degrees';
    $http({
      method: 'POST',
      url: '/api/geocode',
      headers: { 'Content-Type': 'application/json' },
      data: {zipCode: $scope.zipSearch}
    })
    .then (function(data) {
      $rootScope.quakeData = data.data;
      $scope.zipCode = '';
      $location.path('/results');
    })
  };

  var nflData = [
  {
    "Team": "NYC",
    "Team_name": "Giants & Jets",
    "Team_city": "New York",
    "arrest_count": "32"
  },
  {
    "Team": "LOS",
    "Team_name": "Chargers & Rams",
    "Team_city": "Los Angeles",
    "arrest_count": "42"
  },
  {
    "Team": "MIN",
    "Team_name": "Vikings",
    "Team_city": "Minneapolis",
    "arrest_count": "49"
  },
  {
    "Team": "DEN",
    "Team_name": "Broncos",
    "Team_city": "Denver",
    "arrest_count": "47"
  },
  {
    "Team": "CIN",
    "Team_name": "Bengals",
    "Team_city": "Cincinatti",
    "arrest_count": "44"
  },
  {
    "Team": "TB",
    "Team_name": "Buccaneers",
    "Team_city": "Tampa Bay",
    "arrest_count": "36"
  },
  {
    "Team": "IND",
    "Team_name": "Colts",
    "Team_city": "Indianapolis",
    "arrest_count": "36"
  },
  {
    "Team": "TEN",
    "Team_name": "Titans",
    "Team_city": "Nashville",
    "arrest_count": "36"
  },
  {
    "Team": "JAC",
    "Team_name": "Jaguars",
    "Team_city": "Jacksonville",
    "arrest_count": "32"
  },
  {
    "Team": "CLE",
    "Team_name": "Browns",
    "Team_city": "Cleveland",
    "arrest_count": "32"
  },
  {
    "Team": "CHI",
    "Team_name": "Bears",
    "Team_city": "Chicago",
    "arrest_count": "31"
  },
  {
    "Team": "KC",
    "Team_name": "Chiefs",
    "Team_city": "Kansas City",
    "arrest_count": "31"
  },
  {
    "Team": "MIA",
    "Team_name": "Dolphins",
    "Team_city": "Miami",
    "arrest_count": "31"
  },
  {
    "Team": "BAL",
    "Team_name": "Ravens",
    "Team_city": "Baltimore",
    "arrest_count": "26"
  },
  {
    "Team": "SD",
    "Team_name": "Chargers",
    "Team_city": "San Diego",
    "arrest_count": "26"
  },
  {
    "Team": "NO",
    "Team_name": "Saints",
    "Team_city": "New Orleans",
    "arrest_count": "25"
  },
  {
    "Team": "SEA",
    "Team_name": "Seahawks",
    "Team_city": "Seattle",
    "arrest_count": "25"
  },
  {
    "Team": "SF",
    "Team_name": "49ers",
    "Team_city": "San Francisco",
    "arrest_count": "24"
  },
  {
    "Team": "PIT",
    "Team_name": "Steelers",
    "Team_city": "Pittsburgh",
    "arrest_count": "24"
  },
  {
    "Team": "GB",
    "Team_name": "Packers",
    "Team_city": "Green Bay",
    "arrest_count": "22"
  },
  {
    "Team": "WAS",
    "Team_name": "Redskins",
    "Team_city": "Washington DC",
    "arrest_count": "21"
  },
  {
    "Team": "OAK",
    "Team_name": "Raiders",
    "Team_city": "Oakland",
    "arrest_count": "21"
  },
  {
    "Team": "ATL",
    "Team_name": "Falcons",
    "Team_city": "Atlanta",
    "arrest_count": "21"
  },
  {
    "Team": "NE",
    "Team_name": "Patriots",
    "Team_city": "Boston",
    "arrest_count": "20"
  },
  {
    "Team": "CAR",
    "Team_name": "Panthers",
    "Team_city": "Charlotte",
    "arrest_count": "20"
  },
  {
    "Team": "ARI",
    "Team_name": "Cardinals",
    "Team_city": "Phoenix",
    "arrest_count": "20"
  },
  {
    "Team": "NYJ",
    "Team_name": "Jets",
    "Team_city": "New York",
    "arrest_count": "18"
  },
  {
    "Team": "DET",
    "Team_name": "Lions",
    "Team_city": "Detroit",
    "arrest_count": "18"
  },
  {
    "Team": "BUF",
    "Team_name": "Buffalo Bills",
    "Team_city": "Buffalo",
    "arrest_count": "18"
  },
  {
    "Team": "PHI",
    "Team_name": "Eagles",
    "Team_city": "Philadelphia",
    "arrest_count": "18"
  },
  {
    "Team": "DAL",
    "Team_name": "Cowboys",
    "Team_city": "Dallas",
    "arrest_count": "17"
  },
  {
    "Team": "LA",
    "Team_name": "Rams",
    "Team_city": "Los Angeles",
    "arrest_count": "16"
  },
  {
    "Team": "NYG",
    "Team_name": "NY Giants",
    "Team_city": "New York",
    "arrest_count": "14"
  },
  {
    "Team": "HOU",
    "Team_name": "Texans",
    "Team_city": "Houston",
    "arrest_count": "13"
  },
  {
    "Team": "Free ",
    "Team_name": "Free Agents",
    "Team_city": "N/A",
    "arrest_count": "3"
  }
]

  $scope.getValue = function() {
    console.log($scope.team);
    for (var i=0; i<nflData.length; i++) {
      if (nflData[i]["Team"] === $scope.team) {
        $rootScope.nflArrests = nflData[i]["arrest_count"];
        $rootScope.nflTeam = nflData[i]["Team_name"];
      }
    }
  };

});
