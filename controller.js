(function() {
var app = angular.module("wordList");

app.controller("displayController", function($scope, wordFactory, $location) {

    $scope.madLibsWord = wordFactory.returnInput();


});

})();
