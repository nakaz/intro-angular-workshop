(function (){
  angular.module('myApp')
    .controller('myController', ['$scope', 'myAppTitle', 'CharacterVersionFactory', 'BookService', myController]);

    function myController ($scope, myAppTitle, CharacterVersionFactory, BookService) {
      $scope.name = 'Sean';
      $scope.title = myAppTitle;
      $scope.characters = CharacterVersionFactory;
      $scope.favbook = BookService.getBook(1);
      $scope.books = BookService.getBooks();
      $scope.addbook = BookService.addBook;
    }
})();