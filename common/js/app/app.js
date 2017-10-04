angular.module('InteractionofColor', ['ngRoute', 'ngMaterial', 'ngCookies', 'mdColorPicker'])

.config(['$routeProvider', function($routeProvider) {
	
	var dir = "/common/view/";

	$routeProvider
		.when("/", {
			// controller : xxx, // 構造化の際はこうした方がいいかも
			templateUrl: dir + "chapterIV.html"
		})
		.when("/chapterIV/", {
			templateUrl: dir + "chapterIV.html"
		})
		.when("/chapterV/", {
			templateUrl: dir + "chapterV.html"
		})
		.when("/chapterVI/", {
			templateUrl: dir + "chapterVI.html"
		})
		.otherwise({
			redirectTo : "/"
		});
		
}])


// .config(['$locationProvider', function($locationProvider) {
// 	$locationProvider.html5Mode({
// 		enabled: true,
// 		requireBase: false
// 	});
// }]);
