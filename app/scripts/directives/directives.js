'use strict';

angular
  .module('resumeApp')
  .directive('navScroll', navScroll)
  .directive('mainBlock', mainBlock)
  .directive('toolBlock', toolBlock)
  .directive('scrollChange', scrollChange)
  .directive('scrollChangeHash', scrollChangeHash);

scrollChange.$inject = ['$window'];
scrollChangeHash.$inject = ['$window'];
navScroll.$inject = ['$rootScope'];

function mainBlock() {
    return {
        scope: {
          blockInfo: '=info'
        },
        restrict: 'AEC',
        templateUrl: '/views/blockdir.html',
        replace: true
    };
}

function toolBlock() {
    return {
        scope: {
          toolInfo: '=info'
        },
        restrict: 'AEC',
        templateUrl: '/views/tooldir.html',
        replace: true
    };
}

function scrollChange($window) {
    return {
        link: function(scope, element, attrs) {
          angular.element($window).bind("scroll", function() {
              if (this.pageYOffset === 0) {
                  scope.navText = true;
              } else {
                  scope.navText = false;
              }
              scope.$apply();
          });
      }
    };
}

function scrollChangeHash($window) {
    return {
        link: function(scope, element, attrs) {
          angular.element($window).bind("scroll", function() {
              let projects = $('#projects').offset().top,
                  development = $('#github').offset().top,
                  tools = $('#tools').offset().top,
                  contact = $('#contact').offset().top,    
              elementOff = ($(element).offset().top + 75);
          if (elementOff > projects && elementOff < development) {
            window.location.hash = '#/' + 'projects';
          } else if (elementOff > development && elementOff < tools) {
            window.location.hash = '#/' + 'development';
          } else if (elementOff > tools && elementOff < (contact - 500)) {
            window.location.hash = '#/' + 'tools';
          } else if (elementOff > (contact - 500)) {
            window.location.hash = '#/' + 'contact';
          } else {
            window.location.hash = '#/';
          }
          });
      }
    };
}

function navScroll($rootScope) {
    return {
        restrict: "A",
        link: function(scope, element, attrs) {
          return $(element).click(function() {
            if ($rootScope.navScrollClick !== element) {
              $(window).scrollTo($('#' + attrs.ngModel + ''), 800, {offset:-55});
              $rootScope.navScrollClick = element;
            }
          });
        }
  };
} 
