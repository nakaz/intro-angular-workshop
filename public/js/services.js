(function (){
  angular
    .module('myApp')
    .service('BookService', function (){
      var books = [{title: 'Enders Game',
                    author: 'Scott Sumtin'},
                   {title: 'Hairy Pottah',
                    author: 'jk rowling'},
                   {title: 'Kill Bard',
                    author: 'sum gai'}];

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