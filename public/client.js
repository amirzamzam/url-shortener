// so, I see what you're talking about. The editor says "angular" is not defined
var app = angular.module('shortURLApp', []);

app.controller('shortAppCtrl', function($scope){
$scope.test = "Hello World";

});