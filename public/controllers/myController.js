(function (){
  angular.module('myApp')
    .controller('myController', [
      '$scope',
      'myAppTitle',
      'CharacterVersionFactory',
      'BookService',
      'Movies',
      myController
    ]);

    function myController ($scope, myAppTitle, CharacterVersionFactory, BookService, Movies) {
      $scope.name = 'Sean';
      $scope.title = myAppTitle;
      $scope.characters = CharacterVersionFactory;
    }
})();