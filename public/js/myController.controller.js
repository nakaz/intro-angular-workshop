(function (){
  angular.module('myApp')
    .controller('myController', ['$scope', 'myAppTitle', function ($scope, myAppTitle) {
      $scope.name = 'Sean';
      $scope.title = myAppTitle;
    }]);
})();