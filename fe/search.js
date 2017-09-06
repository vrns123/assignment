var myApp = angular.module('myApp');

myApp.controller('SearchController', ['$scope', '$http', '$location', '$routeParams', 
	function($scope, $http, $location, $routeParams){
		$scope.toSearch=''
		$scope.flag=false;

	$scope.getData = function(toSearch){
		console.log('toSearch',toSearch);
		$http.get('/api/search/'+toSearch).success(function(response){
			console.log('response',response.template);
			$scope.results = response;
			flag=true;
		});
	}
}]);