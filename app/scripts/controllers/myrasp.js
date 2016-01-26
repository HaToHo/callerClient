'use strict';

/**
 * @ngdoc function
 * @name callerClientApp.controller:SetupCtrl
 * @description
 * # MainCtrl
 * Controller of the callerClientApp
 */

angular.module('callerClientApp')
  .controller('MyRaspCtrl', function($scope, storage) {
    var vm = this;
    $scope.action = "list";

    //localStorage.removeItem("raspberryData");
    $scope.raspberryData = localStorage.getItem("raspberryData")?JSON.parse(storage.getItem("raspberryData")):[];
    $scope.setAction = function(view) {
      $scope.action = view;
      $scope.raspberry = {
        id: "",
        name: "",
        sharedsecret: "",
        pkeypem: ""
      };
    };

    $scope.verifyNotUniqueName = function(form, name){
      if (!$scope.raspberry.name) {
        return false;
      }
      name.$invalid = false;
      angular.forEach($scope.raspberryData, function(item) {
        if (item["name"] == $scope.raspberry.name) {
          form.$invalid = true;
          name.$invalid = true;
        }
      });
      return name.$invalid;
    };

    $scope.verifyNotUniqueId = function(form, id){
      if (!$scope.raspberry.id) {
        return false;
      }
      id.$invalid = false;
      angular.forEach($scope.raspberryData, function(item) {
        if (item["id"] == $scope.raspberry.id) {
          form.$invalid = true;
          id.$invalid = true;
        }
      });
      return id.$invalid;
    };

    $scope.cancelRaspberry = function() {
      $scope.action = "list";
    };

    $scope.addRaspberry = function() {
      $scope.action = "list";
      $scope.raspberryData.push($scope.raspberry);
      storage.setItem("raspberryData", JSON.stringify($scope.raspberryData));
    };

    $scope.sPemPrvKey = "-----BEGIN RSA PRIVATE KEY-----\n"+
      "MIIEogIBAAKCAQEA4qiw8PWs7PpnnC2BUEoDRcwXF8pq8XT1/3Hc3cuUJwX/otNe\n"+
      "fr/Bomr3dtM0ERLN3DrepCXvuzEU5FcJVDUB3sI+pFtjjLBXD/zJmuL3Afg91J9p\n"+
      "79+Dm+43cR6wuKywVJx5DJIdswF6oQDDzhwu89d2V5x02aXB9LqdXkPwiO0eR5s/\n"+
      "xHXgASl+hqDdVL9hLod3iGa9nV7cElCbcl8UVXNPJnQAfaiKazF+hCdl/syrIh0K\n"+
      "CZ5opggsTJibo8qFXBmG4PkT5YbhHE11wYKILwZFSvZ9iddRPQK3CtgFiBnXbVwU\n"+
      "5t67tn9pMizHgypgsfBoeoyBrpTuc4egSCpjsQIDAQABAoIBAF2sU/wxvHbwAhQE\n"+
      "pnXVMMcO0thtOodxzBz3JM2xThhWnVDgxCPkAhWq2X0NSm5n9BY5ajwyxYH6heTc\n"+
      "p6lagtxaMONiNaE2W7TqxzMw696vhnYyL+kH2e9+owEoKucXz4QYatqsJIQPb2vM\n"+
      "0h+DfFAgUvNgYNZ2b9NBsLn9oBImDfYueHyqpRGTdX5urEVtmQz029zaC+jFc7BK\n"+
      "Y6qBRSTwFwnVgE+Td8UgdrO3JQ/0Iwk/lkphnhls/BYvdNC5O8oEppozNVmMV8jm\n"+
      "61K+agOh1KD8ky60iQFjo3VdFpUjI+W0+sYiYpDb4+Z9OLOTK/5J2EBAGim9siyd\n"+
      "gHspx+UCgYEA9+t5Rs95hG9Q+6mXn95hYduPoxdFCIFhbGl6GBIGLyHUdD8vmgwP\n"+
      "dHo7Y0hnK0NyXfue0iFBYD94/fuUe7GvcXib93heJlvPx9ykEZoq9DZnhPFBlgIE\n"+
      "SGeD8hClazcr9O99Fmg3e7NyTuVou+CIublWWlFyN36iamP3a08pChsCgYEA6gvT\n"+
      "pi/ZkYI1JZqxXsTwzAsR1VBwYslZoicwGNjRzhvuqmqwNvK17dnSQfIrsC2VnG2E\n"+
      "UbE5EIAWbibdoL4hWUpPx5Tl096OjC3qBR6okAxbVtVEY7Rmv7J9RwriXhtD1DYp\n"+
      "eBvo3eQonApFkfI8Lr2kuKGIgwzkZ72QLXsKJiMCgYBZXBCci0/bglwIObqjLv6e\n"+
      "zQra2BpT1H6PGv2dC3IbLvBq7hN0TQCNFTmusXwuReNFKNq4FrB/xqEPusxsQUFh\n"+
      "fv2Il2QoI1OjUE364jy1RZ7Odj8TmKp+hoEykPluybYYVPIbT3kgJy/+bAXyIh5m\n"+
      "Av2zFEQ86HIWMu4NSb0bHQKBgETEZNOXi52tXGBIK4Vk6DuLpRnAIMVl0+hJC2DB\n"+
      "lCOzIVUBM/VxKvNP5O9rcFq7ihIEO7SlFdc7S1viH4xzUOkjZH2Hyl+OLOQTOYd3\n"+
      "kp+AgfXpg8an4ujAUP7mu8xaxns7zsNzr+BCgYwXmIlhWz2Aiz2UeL/IsfOpRwuV\n"+
      "801xAoGADQB84MJe/X8xSUZQzpn2KP/yZ7C517qDJjComGe3mjVxTIT5XAaa1tLy\n"+
      "T4mvpSeYDJkBD8Hxr3fB1YNDWNbgwrNPGZnUTBNhxIsNLPnV8WySiW57LqVXlggH\n"+
      "vjFmyDdU5Hh6ma4q+BeAqbXZSJz0cfkBcBLCSe2gIJ/QJ3YJVQI=\n"+
      "-----END RSA PRIVATE KEY-----";
    $scope.sHead = '{"alg":"RS256"}';
    $scope.sPayload = "{'iss':'joe', 'exp':1300819380, 'http://example.com/is_root':true}";

    $scope.sCert = "-----BEGIN CERTIFICATE-----\n"+
      "MIIDMjCCAhqgAwIBAgIJAKMfG/B2MKd5MA0GCSqGSIb3DQEBBQUAMBoxCzAJBgNV\n"+
      "BAYTAkpQMQswCQYDVQQKEwJ6MzAeFw0xMDA1MzEwNjE4MDhaFw0yMDA1MjgwNjE4\n"+
      "MDhaMBoxCzAJBgNVBAYTAkpQMQswCQYDVQQKEwJ6MzCCASIwDQYJKoZIhvcNAQEB\n"+
      "BQADggEPADCCAQoCggEBAOKosPD1rOz6Z5wtgVBKA0XMFxfKavF09f9x3N3LlCcF\n"+
      "/6LTXn6/waJq93bTNBESzdw63qQl77sxFORXCVQ1Ad7CPqRbY4ywVw/8yZri9wH4\n"+
      "PdSfae/fg5vuN3EesLissFSceQySHbMBeqEAw84cLvPXdlecdNmlwfS6nV5D8Ijt\n"+
      "HkebP8R14AEpfoag3VS/YS6Hd4hmvZ1e3BJQm3JfFFVzTyZ0AH2oimsxfoQnZf7M\n"+
      "qyIdCgmeaKYILEyYm6PKhVwZhuD5E+WG4RxNdcGCiC8GRUr2fYnXUT0CtwrYBYgZ\n"+
      "121cFObeu7Z/aTIsx4MqYLHwaHqMga6U7nOHoEgqY7ECAwEAAaN7MHkwHQYDVR0O\n"+
      "BBYEFKO4NcUDh3J5c7XD7j4pVXnzIfALMEoGA1UdIwRDMEGAFKO4NcUDh3J5c7XD\n"+
      "7j4pVXnzIfALoR6kHDAaMQswCQYDVQQGEwJKUDELMAkGA1UEChMCejOCCQCjHxvw\n"+
      "djCneTAMBgNVHRMEBTADAQH/MA0GCSqGSIb3DQEBBQUAA4IBAQC8JdiwJF22/3nB\n"+
      "IxJT/gXXN10cub6O+x9q64ls7dpGpBvbi4/lJgZOsZqoJiswU5WOKZ4MTOmMHe4W\n"+
      "e/MHuhcjsgf9EHHYZQ1reBYi/l9mBBbYFGs0zSv1CyjbwkyF36nr/8sWdYf4ZtXQ\n"+
      "nzTGvoa6oTOOTmmj3Bwl3CHwonvgAJUCHY/UmWFzH8Sf0dDW7iJBj+ZWfjuSlSQe\n"+
      "2ninrEpfA4v2V1p3LOH+layZLDMJHkNCq8eoU1MbJi07cHxLWtlwliNOiRboaiYl\n"+
      "1wtWR7ZY4HZCPeyb0tanf58rBQAXElaCF3fmfHrlpxoJBsQP1NbFrBs2haOIEZ4E\n"+
      "K3V9/Bpi\n"+
      "-----END CERTIFICATE-----";
    $scope.sharedSecret = "My secret";

    $scope.genJWS = function () {
      var sHead = $scope.sHead;
      var sPayload = $scope.sPayload;
      var sPemPrvKey = $scope.sPemPrvKey;
      var options = { mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 };
      var encrypted = CryptoJS.AES.encrypt(sPayload, $scope.sharedSecret);
      sPayload = encrypted;
      var jws = new KJUR.jws.JWS();
      var sResult = null;
      try {
        var key = new RSAKey();
        key.readPrivateKeyFromPEMString(sPemPrvKey);
        sResult = jws.generateJWSByKey(sHead, sPayload, key);
        return sResult
      } catch (ex) {
        alert("Error: " + ex);
      }
    };

    $scope.doVerify = function(sJWS) {
      var sCert = $scope.sCert;

      var jws = new KJUR.jws.JWS();
      var result = 0;
      try {
        result = jws.verifyJWSByPemX509Cert(sJWS, sCert);
      } catch (ex) {
        alert("Error: " + ex);
        result = 0;
      }

      /*document.form1.im_enchead1.value = jws.parsedJWS.headB64U;
      document.form1.im_encpayload1.value = jws.parsedJWS.payloadB64U;
      document.form1.im_encsigval1.value = jws.parsedJWS.sigvalB64U;
      document.form1.im_siginput1.value = jws.parsedJWS.si;
      document.form1.im_sigval_h1.value = jws.parsedJWS.sigvalH;

      document.form1.im_head1.value = jws.parsedJWS.headS;
      document.form1.im_payload1.value = jws.parsedJWS.payloadS;
      */
      if (result == 1) {
        alert("JWS signature is *Valid*.");
        alert(CryptoJS.AES.decrypt(jws.parsedJWS.payloadS, $scope.sharedSecret).toString(CryptoJS.enc.Utf8));
      } else {
        alert("JWS signature is *Invalid*.");
      }
    }


  });



