(function (){
  angular
    .module('myApp')
    .factory('CharacterVersionFactory', function (){
      return ["Peter", "Primrose", "PeeBeeJay"];
    });
})();