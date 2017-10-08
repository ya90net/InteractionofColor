'use strict';

/**
 * @ngdoc overview
 * @name interactionofColorApp
 * @description
 * # interactionofColorApp
 *
 * Main module of the application.
 */
angular
  .module('interactionofColorApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngRoute',
    'ngMaterial',
    'mdColorPicker'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/chapterIV', {
        templateUrl: 'views/chapteriv.html',
        controller: 'ChapterivCtrl',
        controllerAs: 'chapterIV'
      })
      .when('/chapterV', {
        templateUrl: 'views/chapterv.html',
        controller: 'ChaptervCtrl',
        controllerAs: 'chapterV'
      })
      .when('/chapterVI', {
        templateUrl: 'views/chaptervi.html',
        controller: 'ChapterviCtrl',
        controllerAs: 'chapterVI'
      })
      .when('/chapterVI', {
        templateUrl: 'views/chaptervi.html',
        controller: 'ChapterviCtrl',
        controllerAs: 'chapterVI'
      })
      .when('/chapterVII', {
        templateUrl: 'views/chaptervii.html',
        controller: 'ChapterviiCtrl',
        controllerAs: 'chapterVII'
      })
      .when('/chapterVIII', {
        templateUrl: 'views/chapterviii.html',
        controller: 'ChapterviiiCtrl',
        controllerAs: 'chapterVIII'
      })
      .when('/chapterIX', {
        templateUrl: 'views/chapterix.html',
        controller: 'ChapterixCtrl',
        controllerAs: 'chapterIX'
      })
      .when('/chapterIX', {
        templateUrl: 'views/chapterix.html',
        controller: 'ChapterixCtrl',
        controllerAs: 'chapterIX'
      })
      .when('/chapterX', {
        templateUrl: 'views/chapterx.html',
        controller: 'ChapterxCtrl',
        controllerAs: 'chapterX'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
