(function(){

  'use strict';

  angular
    .module('resumeApp')
    .directive('mainBlock', mainBlock)
    .directive('navScroll', navScroll)
    .directive('parallax', parallax)
    .directive('scrollChange', scrollChange)
    .directive('scrollChangeHash', scrollChangeHash)
    .directive('scrollToBot', scrollToBot);
    
  navScroll.$inject = ['$rootScope'];
  parallax.$inject = ['$window'];
  scrollChange.$inject = ['$window'];
  scrollChangeHash.$inject = ['$rootScope', '$window'];


  
  // Directive for block template
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

  // Directive to smooth-scroll to a location on a page determined
  // by the element's id.
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
              }//end if
            });//end click function
          }//end link
    };//end return
  }//end navScroll

  // Directive to change the sub url of the page to match the location
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
          });//end scroll function
        }//end link
      };//end return
  }//end scrollChangeHash

  // Directive to parallax scroll the element.
  function parallax($window) {
     return {
          link: function(scope, element, attrs) {
            function parallaxScroll(image, offsetX, offsetY) {
              let ypos = window.pageYOffset;
              // Stops scrolling after a certain point
              if (ypos < 600) {
                return image.css('transform', 'translate3d(' + (ypos * offsetX) + 'px,' + (ypos * offsetY) + 'px,0px)');
              }
            }

            angular.element($window).bind("scroll", function() {
              if (typeof InstallTrigger === 'undefined') {
                return parallaxScroll($('#' + attrs.id), 0, 0.4);
              }//end if
            });//end scroll function
          }//end link
      };//end parallax
  }

  // Directive to modify the navbar CSS when not scrolled to the top
  function scrollChange($window) {
      return {
          link: function(scope, element, attrs) {
            var winWidth = $(window).width();
            $($window).bind("resize", function(){
              winWidth = $(window).width();
            });

            $($window).bind("scroll", function() {
                if (this.pageYOffset === 0) {
                    scope.navText = true;
                    $('.navbar-text').css('height', '72px');
                    $('.navbar-text').css('padding-top', '23px');
                    $('.nav-btn-dirty').css('height', '70px');
                    $('.nav-btn-clean').css('height', '70px');

                    if (winWidth === 320) {
                      $('#home').css('top', '0px');
                    }

                } else {

                  if (winWidth > 320) {
                    scope.navText = false;
                    $('.navbar-text').css('height', '52px');
                    $('.navbar-text').css('padding-top', '14px');
                    $('.nav-btn-dirty').css('height', '50px');
                    $('.nav-btn-clean').css('height', '50px');

                  } else {
                    scope.navText = false;
                    $('.navbar-text').css('height', '52px');
                    $('.navbar-text').css('padding-top', '30px');
                    $('.nav-btn-dirty').css('height', '60px');
                    $('.nav-btn-clean').css('height', '60px');
                    $('#home').css('top', '-20px');
                  }
                }
                scope.$apply();
            });//end scroll function
        }//end link
      };//end return
  }//end scrollChange

  function scrollToBot() {
    return {
      restrict: "A",
      link: function(scope, element, attrs) {
        console.log('yo');
        return $(element).click(function() {
          if ((window.innerHeight + window.scrollY) < document.body.offsetHeight) {
            window.scrollTo(0,document.body.scrollHeight);
          }
        });
      }
    };
  }


})();//end IIFE
