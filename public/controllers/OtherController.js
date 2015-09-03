(function (){
  angular.module('myApp')
    .controller('OtherController', [
      '$scope',
      'myAppTitle',
      'CharacterVersionFactory',
      OtherController
    ]);

    function OtherController ($scope, myAppTitle, CharacterVersionFactory) {
      $scope.name = 'Sean';
      $scope.title = myAppTitle;
      $scope.characters = CharacterVersionFactory;
    }
})();