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

    // $scope.loading = true;
    // Quakes.checkZip($scope.zip)
    //   .then (function () {
    //     $scope.loading = false;
    //     $location.path('/results');
    //   })
    //   .catch (function(error) {
    //     console.log(error);
      // })
});



// .factory('Quakes', function($http) {

//     var checkZip = function(zip) {
//       return $http({
//       method: 'POST',
//       url: '/api/geocode',
//       data: zip
//     });
//   };

//   return {checkZip:checkZip};

// })



// .factory('AttachTokens', function ($window) {
//   // this is an $httpInterceptor
//   // its job is to stop all out going request
//   // then look in local storage and find the user's token
//   // then add it to the header so the server can validate the request
//   var attach = {
//     request: function (object) {
//       var jwt = $window.localStorage.getItem('com.shortly');
//       if (jwt) {
//         object.headers['x-access-token'] = jwt;
//       }
//       object.headers['Allow-Control-Allow-Origin'] = '*';
//       return object;
//     }
//   };
//   return attach;
// })
// .run(function ($rootScope, $location, Auth) {
//   // here inside the run phase of angular, our services and controllers
//   // have just been registered and our app is ready
//   // however, we want to make sure the user is authorized
//   // we listen for when angular is trying to change routes
//   // when it does change routes, we then look for the token in localstorage
//   // and send that token to the server to see if it is a real user or hasn't expired
//   // if it's not valid, we then redirect back to signin/signup
//   $rootScope.$on('$routeChangeStart', function (evt, next, current) {
//     if (next.$$route && next.$$route.authenticate && !Auth.isAuth()) {
//       $location.path('/signin');
//     }
//   });
// });
