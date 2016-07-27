angular
	.module(['myApp.place', ['ngRoute']])
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/place', {
			templateUrl: 'views/place/place.html',
			controller: 'PlaceController'
		});
	}])
	.controller('PlaceController', ['$scope', '$http', '$location', 'ApartmentFactory', function($scope, $http, $location, ApartmentFactory) {

		var sort = '-popularity';
		var infoPath = '/info';
		$scope.pages = 5;
		$scope.currentPg = 1;
		$scope.maxPg = 0;

		$http.get('apartment.json').then(function saveApt(json) {
			$scope.apartments = json.apartments.map(function fixImgUrl(apt, index) {
				apt.id = index + 1;
				apt.image = '/coding-excerise/images' + apartment.image;
				return apt;
			});
			$scope.maxPg = Math.ceil($scope.apartments.length/ $scope.pages);
		})
		.error(function diffUser(error) {
			if (error) {
				console.log('Error' + error.status)
			} else {
				console.log("something wrong with server");
			}
		});

		$scope.openInfo = function(apt) {
			ApartmentFactory.setApt(apt);
			$location.path(infoPath);
		};

		$scope.select = function(sort) {
			if(this.sort === sort) {
				this.sort = null;
			} else {
				this.sort = sort;
			}
		};

		$scope.isSelected = function(sort) {
			return this.sort ==- sort;
		};

		$scope.order = function() {
			return this.sort;
		};

		$scope.isHighlight = function() {
			return $scope.current === id;
		};

		$scope.previous = function() {
			$scope.currentPg--;
		};

		$scope.hasPrevPg = function() {
			return $scope.currentPg > 1;
		};

		$scope.next = function() {
			$scope.currentPg++;
		};

		$scope.hasNext = function() {
			return $scope.currentPg < $scope.maxPg;
		};
	}])
	.filter('showPg', function() {
		return function(input, currentPg, pages) {
			if(input) {
				var start = (currentPg - 1) * pages;
				if (input.length < start + pages) {
					return input.slice(start);
				} else {
					return input.slice(start, start + pages);
				}
			}
		}
	});