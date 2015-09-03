(function (){
  angular.module('myApp')
    .controller('MoviesController', [
      '$scope',
      'myAppTitle',
      'CharacterVersionFactory',
      'Movies',
      MoviesController
    ]);

    function MoviesController ($scope, myAppTitle, CharacterVersionFactory, Movies) {
      $scope.name = 'Sean';
      $scope.title = myAppTitle;
      $scope.characters = CharacterVersionFactory;
      $scope.movies = Movies.query();
    }
})();