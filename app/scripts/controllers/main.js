'use strict';

/**
 * @ngdoc function
 * @name callerClientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the callerClientApp
 */
angular.module('callerClientApp')
  .controller('MainCtrl', function($scope, storage) {
    $scope.view = "home";

    $scope.setView = function(view) {
      $scope.view = view;
    };

    $scope.verifyLogin = function() {
      return $scope.ok;
    };

    $scope.logout = function() {
      $scope.ok =false;
      $scope.password = "";
    };

    $scope.login = function(form) {
      $scope.ok = false;
      if (!localStorage.getItem("login")) {
        localStorage.setItem("login", CryptoJS.AES.encrypt("youareloggedin", $scope.password));
        form.$invalid = false;
        storage.setPassword($scope.password);
        $scope.ok = true;
        form.password = "";
      } else if (CryptoJS.AES.decrypt(localStorage.getItem("login"), $scope.password).toString(CryptoJS.enc.Utf8) == "youareloggedin"){
        form.$invalid = false;
        storage.setPassword($scope.password);
        $scope.ok = true;
        form.password = "";
      } else {
        form.$invalid = true;
      }

    };

    $scope.alertme = function() {
      alert("ME");
    };

  });
