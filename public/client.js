console.log('App up and running');
angular.module('bfmApp', ['ui.router'])
	.config(['$urlRouterProvider', '$stateProvider', '$locationProvider', function($urlRouterProvider, $stateProvider, $locationProvider) {
		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('home', {
				url:'/',
				templateUrl: 'templates/main.html'
			})
			.state('vendors', {
				url: '/vendors',
				templateUrl: 'templates/vendors.html'
			})
			.state('vendorApply', {
				url: '/vendors/apply',
				templateUrl: 'templates/vendor-application.html'
			});
			$locationProvider.html5Mode({
	      enabled: true,
	      requireBase: false
	    });

	}]);