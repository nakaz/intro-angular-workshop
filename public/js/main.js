(function (){
  var app = angular.module('myApp', []);

  //runs after app is loaded
  app.run(function ($rootScope, APP_VERSION){
    $rootScope.APP_VERSION = APP_VERSION;
  });
})();