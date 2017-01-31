angular.module("coffeeTable", ['ui.router'])
	.config(frontEndRouting);

frontEndRouting.$inject = ["$stateProvider","$locationProvider"];
function frontEndRouting($stateProvider,$locationProvider) {
	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});

	var homePage = {
		name: 'home',
		url: '/',
		templateUrl: 'templates/home.html',
		controller: 'HomeController as home'
	};

	var usMap = {
		name: 'usMap',
		url: '/usMap',
		templateUrl: 'templates/usMap.html',
		controller: 'USMapController as usMap'
	};

	var worldMap = {
		name: 'worldMap',
		url: '/worldMap',
		templateUrl: 'templates/worldMap.html',
		controller: "WorldMapController as worldMap"
	};

	$stateProvider.state(homePage);
	$stateProvider.state(usMap);
	$stateProvider.state(worldMap);
}