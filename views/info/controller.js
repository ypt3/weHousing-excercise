angular.module('myApp.place', ['ngRoute'])
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('info', {
			templateUrl: 'views/info/info.html',
			controller: 'InfoController'
		});
	}])
	.controller('InfoController', ['$scope', 'ApartmentFactory', function($scope, ApartmentFactory) {
		$scope.apartment = ApartmentFactory.getApt();
	}]);
