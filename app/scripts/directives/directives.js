(function(){

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
                    $('.navbar-text').css('height', '72px');
                    $('.navbar-text').css('padding-top', '23px');
                    $('.nav-btn-dirty').css('height', '70px');
                    $('.nav-btn-clean').css('height', '70px');
                } else {
                    scope.navText = false;
                    $('.navbar-text').css('height', '52px');
                    $('.navbar-text').css('padding-top', '14px');
                    $('.nav-btn-dirty').css('height', '50px');
                    $('.nav-btn-clean').css('height', '50px');
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
                let projects = $('#projects-section').offset().top,
                    development = $('#github-section').offset().top,
                    tools = $('#tools-section').offset().top,
                    contact = $('#contact-section').offset().top,    
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
                if (attrs.id !== 'home') {
                  scope.navSpan = attrs.id;
                  $(window).scrollTo($('#' + attrs.id + '-section'), 800, {offset:-55});
                } else {
                  scope.navSpan = attrs.id;
                  $(window).scrollTo(0, 800, {offset:-55});
                }
                $rootScope.navScrollClick = element;
              }
            });
          }
    };
  }
})();
