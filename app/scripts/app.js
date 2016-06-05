'use strict';

/**
 * @ngdoc overview
 * @name resumeApp
 * @description
 * # resumeApp
 *
 * Main module of the application.
 */
angular
  .module('resumeApp', [
    'ngAnimate',
    'ngCookies',
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
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .directive('mainBlock', function(){
    return {
        scope: {
          blockInfo: '=info'
        },
        restrict: 'AEC',
        templateUrl: '/views/blockdir.html',
        replace: true
      };
  })
  .directive('toolBlock', function(){
    return {
        scope: {
          toolInfo: '=info'
        },
        restrict: 'AEC',
        templateUrl: '/views/tooldir.html',
        replace: true
      };
  });
