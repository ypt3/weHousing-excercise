angular.module('myApp', ['ngRoute', 'myApp.place', 'myApp.info'])
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.otherwise({redirectTo: '/place'});
	}])
	.factory('ApartmentFactory', function() {
		this.apartment = null;
		this.setApt = function() {
			this.apartment = apartment;
		}
		this.getApt = function() {
			return this.apartment;
		}
	});