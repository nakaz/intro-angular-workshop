(function (){
  angular.module('myApp')
    .controller('myController', ['$scope', 'myAppTitle', 'CharacterVersionFactory', 'BookService', myController]);

    function myController ($scope, myAppTitle, CharacterVersionFactory, BookService) {
      $scope.name = 'Sean';
      $scope.title = myAppTitle;
      $scope.characters = CharacterVersionFactory;
      $scope.book = BookService.getBook(1);
      $scope.books = BookService.getBooks();
    }
})();