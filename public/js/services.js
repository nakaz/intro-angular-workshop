(function (){
  angular
    .module('myApp')
    .service('BookService', function (){
      var books = ['Enders Game', 'Harry Pottah', 'Kill Burd'];

      this.getBooks = function (){
        return books;
      };

      this.getBook = function (index){
        if (index < 0 || index >= books.length){
          return null;
        }
        return books[index];
      };

    });
})();