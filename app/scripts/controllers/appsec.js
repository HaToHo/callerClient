'use strict';

/**
 * @ngdoc function
 * @name callerClientApp.controller:AppsecCtrl
 * @description
 * # AppsecCtrl
 * Controller of the callerClientApp
 */
angular.module('callerClientApp')
  .controller('AppsecCtrl', ['$scope', function($scope) {
    if (window.File && window.FileReader && window.FileList && window.Blob) {
      // Great success! All the File APIs are supported.
    } else {
      alert('The File APIs are not fully supported in this browser.');
    }
    if (!localStorage.getItem("appid")){

    }
    $scope.security = {
      serverurl: localStorage.getItem("serverurl")?localStorage.getItem("serverurl"):"",
      appid: localStorage.getItem("appid")?localStorage.getItem("appid"):"",
      sharedsecret: localStorage.getItem("sharedsecret")?localStorage.getItem("sharedsecret"):"",
      pkeypem: localStorage.getItem("pkeypem")?localStorage.getItem("pkeypem"):""

    };

    $scope.$watch('security', function(newValue, oldValue) {
      if (newValue != oldValue) {
        localStorage.setItem("serverurl", newValue['serverurl']);
        localStorage.setItem("appid", newValue['appid']);
        localStorage.setItem("sharedsecret", newValue['sharedsecret']);
        localStorage.setItem("pkeypem", newValue['pkeypem']);
      }
    }, true);

  }]);
