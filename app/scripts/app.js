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
      .when('/chapterXI', {
        templateUrl: 'views/chapterxi.html',
        controller: 'ChapterxiCtrl',
        controllerAs: 'chapterXI'
      })
      .when('/chapterXII', {
        templateUrl: 'views/chapterxii.html',
        controller: 'ChapterxiiCtrl',
        controllerAs: 'chapterXII'
      })
      .when('/chapterXIII', {
        templateUrl: 'views/chapterxiii.html',
        controller: 'ChapterxiiiCtrl',
        controllerAs: 'chapterXIII'
      })
      .when('/chapterXIV', {
        templateUrl: 'views/chapterxiv.html',
        controller: 'ChapterxivCtrl',
        controllerAs: 'chapterXIV'
      })
      .when('/chapterXV', {
        templateUrl: 'views/chapterxv.html',
        controller: 'ChapterxvCtrl',
        controllerAs: 'chapterXV'
      })
      .when('/chapterXVI', {
        templateUrl: 'views/chapterxvi.html',
        controller: 'ChapterxviCtrl',
        controllerAs: 'chapterXVI'
      })
      .when('/chapterXVII', {
        templateUrl: 'views/chapterxvii.html',
        controller: 'ChapterxviiCtrl',
        controllerAs: 'chapterXVII'
      })
      .when('/chapterXVIII', {
        templateUrl: 'views/chapterxviii.html',
        controller: 'ChapterxviiiCtrl',
        controllerAs: 'chapterXVIII'
      })
      .when('/chapterXX', {
        templateUrl: 'views/chapterxx.html',
        controller: 'ChapterxxCtrl',
        controllerAs: 'chapterXX'
      })
      .when('/chapterXXI', {
        templateUrl: 'views/chapterxxi.html',
        controller: 'ChapterxxiCtrl',
        controllerAs: 'chapterXXI'
      })
      .when('/chapterXXII', {
        templateUrl: 'views/chapterxxii.html',
        controller: 'ChapterxxiiCtrl',
        controllerAs: 'chapterXXII'
      })
      .when('/chapterXXIII', {
        templateUrl: 'views/chapterxxiii.html',
        controller: 'ChapterxxiiiCtrl',
        controllerAs: 'chapterXXIII'
      })
      .when('/chapterXXIV', {
        templateUrl: 'views/chapterxxiv.html',
        controller: 'ChapterxxivCtrl',
        controllerAs: 'chapterXXIV'
      })
      .otherwise({
        redirectTo: '/'
      });
  });



/* Init Sidebar  */
var slideout = new Slideout({
  'panel': document.getElementById('panel'),
  'menu': document.getElementById('menu'),
  'padding': 256,
  'tolerance': 70,
  'side': 'right'
});

// Toggle button
document.querySelector('.openMenu').addEventListener('click', function() {
  slideout.toggle();
});