(function() {

var app = angular.module("wordList");

app.factory("wordFactory", function() {
  var userWordReturn = {};
    var userWordReturn = createMadLib;{
      return {
            setUserWordReturn: function(createMadLib) {
                userWordReturn = createMadLib;
            },
            getUserWordReturn: function() {
                return userWordReturn;
            }
    }
  };

  function returnInput() {
    return userWordReturn;
  }



});
})();
