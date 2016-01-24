'use strict';

/**
 * @ngdoc function
 * @name callerClientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the callerClientApp
 */
angular.module('callerClientApp')
  .controller('MainCtrl', ['$scope', function($scope) {
    $scope.view = "home";

    $scope.setView = function(view) {
      $scope.view = view;
    };

    $scope.alertme = function() {
      alert("ME");
    };

  }]);
