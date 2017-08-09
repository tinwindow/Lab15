(function() {
var app = angular.module("wordList");

app.controller("inputController", function($scope, wordFactory, $location) {

    $scope.addWords = function(createMadLib){
      console.log(createMadLib);
      };
     wordFactory.saveInput(createMadLib);

     $location.path('/display')

    });

});
