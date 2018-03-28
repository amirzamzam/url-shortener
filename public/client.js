// so, I see what you're talking about. The editor says "angular" is not defined.
// After launching the app, I went to check the JS console
// The JS console shows that angular is loading and is globally accessible
// Hypothesis: since angular is loading in the app, then it's being included propertly, 
// and the message about "anguglar" not being defined exists only in the editor
// you are welcome!
var app = angular.module('shortURLApp', []);

app.controller('shortAppCtrl', ($scope) =>{
  $scope.urlToShorten = "Hello World";

});

