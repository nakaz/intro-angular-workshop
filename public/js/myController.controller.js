(function (){
  angular.module('myApp')
    .controller('myController', ['$scope', 'myAppTitle', 'CharacterVersionFactory', function ($scope, myAppTitle, CharacterVersionFactory) {
      $scope.name = 'Sean';
      $scope.title = myAppTitle;
      $scope.characters = CharacterVersionFactory;
    }]);
})();