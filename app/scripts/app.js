'use strict';

/**
 * @ngdoc overview
 * @name callerClientApp
 * @description
 * # callerClientAppangular di
 *
 * Main module of the application.
 */
angular
  .module('callerClientApp', [
    'ngAnimate'
  ])
  .directive('ngActive', function() {
    return function(scope, elm, attrs) {
      scope.setActive = function(evt){
        $(".active",elm).removeClass("active");
        angular.element(evt.currentTarget).addClass("active");
      }
    }
  })
;
