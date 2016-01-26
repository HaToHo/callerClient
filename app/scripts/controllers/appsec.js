'use strict';

/**
 * @ngdoc function
 * @name callerClientApp.controller:AppsecCtrl
 * @description
 * # AppsecCtrl
 * Controller of the callerClientApp
 */
angular.module('callerClientApp')
  .controller('AppsecCtrl', function($scope, storage) {
    if (window.File && window.FileReader && window.FileList && window.Blob) {
      // Great success! All the File APIs are supported.
    } else {
      alert('The File APIs are not fully supported in this browser.');
    }
    //localStorage.removeItem("serverurl");
    //localStorage.removeItem("appid");
    //localStorage.removeItem("sharedsecret");
    //localStorage.removeItem("pkeypem");
    $scope.security = {
      serverurl: localStorage.getItem("serverurl")?storage.getItem("serverurl"):"",
      appid: localStorage.getItem("appid")?storage.getItem("appid"):"",
      sharedsecret: localStorage.getItem("sharedsecret")?storage.getItem("sharedsecret"):"",
      pkeypem: localStorage.getItem("pkeypem")?storage.getItem("pkeypem"):""

    };

    $scope.$watch('security', function(newValue, oldValue) {
      if (newValue != oldValue) {
        storage.setItem("serverurl", newValue['serverurl']);
        storage.setItem("appid", newValue['appid']);
        storage.setItem("sharedsecret", newValue['sharedsecret']);
        storage.setItem("pkeypem", newValue['pkeypem']);
      }
    }, true);

  });
