(function(){

  'use strict';

  angular
    .module('resumeApp')
    .directive('mainBlock', mainBlock)
    .directive('navScroll', navScroll)
    .directive('parallax', parallax)
    .directive('scrollChange', scrollChange)
    .directive('scrollChangeHash', scrollChangeHash)
    .directive('toolBlock', toolBlock);
    

  navScroll.$inject = ['$rootScope'];
  parallax.$inject = ['$window'];
  scrollChange.$inject = ['$window'];
  scrollChangeHash.$inject = ['$rootScope', '$window'];
  
  
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

  function navScroll($rootScope) {
      return {
          restrict: "A",
          link: function(scope, element, attrs) {
            return $(element).click(function() {
              if ($rootScope.navScrollClick !== attrs.id) {
                if (attrs.id !== 'home') {
                  scope.navSpan = attrs.id;
                  $(window).scrollTo($('#' + attrs.id + '-section'), 800, {offset:-55});
                } else {
                  scope.navSpan = attrs.id;
                  $(window).scrollTo(0, 800, {offset:-55});
                }
                $rootScope.navScrollClick = attrs.id;
              }
            });
          }
    };
  }

  function scrollChangeHash($rootScope, $window) {
      return {
          link: function(scope, element, attrs) {
            angular.element($window).bind("scroll", function() {

              let projects = $('#projects-section').offset().top,
                  github = $('#github-section').offset().top,
                  tools = $('#tools-section').offset().top,
                  contact = $('#contact-section').offset().top,    
                  elementOff = ($(element).offset().top + 75);


              

              if (elementOff >  github && elementOff < projects) {
                window.location.hash = '#/' + 'development';
                scope.navSpan = 'github';
                $rootScope.navScrollClick = scope.navSpan;
              } else if (elementOff > projects && elementOff < tools) {
                window.location.hash = '#/' + 'projects';
                scope.navSpan = 'projects';
                $rootScope.navScrollClick = scope.navSpan;
              } else if (elementOff > tools && elementOff < (contact - 500)) {
                window.location.hash = '#/' + 'tools';
                scope.navSpan = 'tools';
                $rootScope.navScrollClick = scope.navSpan;
              } else if (elementOff > (contact - 500)) {
                window.location.hash = '#/' + 'contact';
                scope.navSpan = 'contact';
                $rootScope.navScrollClick = scope.navSpan;
              } else {
                window.location.hash = '#/';
                scope.navSpan = 'home';
                $rootScope.navScrollClick = scope.navSpan;
              }
          });
        }
      };
  }

  function parallax($window) {

     return {
          link: function(scope, element, attrs) {
            function parallaxScroll(image, offsetX, offsetY) {
              let ypos = window.pageYOffset;
              if (ypos < 600) {
                return image.css('transform', 'translate3d(' + (ypos * offsetX) + 'px,' + (ypos * offsetY) + 'px,0px)');
              }
            }

            angular.element($window).bind("scroll", function() {
              if (typeof InstallTrigger === 'undefined') {
                return parallaxScroll($('#' + attrs.id), 0, 0.4);
              }
            });
          }
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
})();
