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
  .factory('storage', function() {
    var _password = null;
    var _storageService = {};

    _storageService.setPassword = function(password) {
      _password = password;
    };
    _storageService.setItem = function(name, item) {
      localStorage.setItem(name, CryptoJS.AES.encrypt(item, _password));
    };
    _storageService.getItem = function(name) {
      return CryptoJS.AES.decrypt(localStorage.getItem(name), _password).toString(CryptoJS.enc.Utf8);
    };
    return _storageService;
  })
  .directive('ngActive', function() {
    return function(scope, elm, attrs) {
      scope.setActive = function(evt){
        $(".active",elm).removeClass("active");
        angular.element(evt.currentTarget).addClass("active");
      }
    }
  })
;
