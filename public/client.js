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
				url: '/vendor-application',
				templateUrl: 'templates/vendor-application.html'
			})
			.state('involved', {
				url: '/involved',
				templateUrl: 'templates/involved.html'
			})
			.state('sponsorship', {
				url: '/sponsorship',
				templateUrl: 'templates/sponsor.html'
			})
			.state('volunteer', {
				url: '/volunteer',
				templateUrl: 'templates/volunteer.html'
			})
			.state('musician', {
				url: '/musicians',
				templateUrl: 'templates/musician.html'
			})
			.state('non-profit', {
				url: '/non-profit',
				templateUrl: 'templates/non-profit.html'
			})
			.state('pop', {
				url: '/power-of-produce',
				templateUrl: 'templates/pop.html'
			});
			$locationProvider.html5Mode({
	      enabled: true,
	      requireBase: false
	    });

	}]);