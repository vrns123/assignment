var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function($routeProvider){
	$routeProvider.when('/search', {
		controller:'SearchController',
		templateUrl: 'search.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});