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
      // $scope.favbook = BookService.getBook(1);
      // $scope.books = BookService.getBooks();
      // $scope.addbook = BookService.addBook;
      $scope.movies = Movies.query();
    }
})();