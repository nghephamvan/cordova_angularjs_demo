'use strict';

/**
 * @ngdoc overview
 * @name cordovaWithAngularJsApp
 * @description
 * # cordovaWithAngularJsApp
 *
 * Main module of the application.
 */
angular
  .module('cordovaWithAngularJsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
