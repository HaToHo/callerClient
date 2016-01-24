'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('callerClientApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  describe('$scope.setView', function() {
    it('set the current view', function() {
      expect(scope.view).toEqual('home');
      scope.setView("setup");
      expect(scope.view).toEqual('setup');
    });
  });

  /*it('should attach a list of awesomeThings to the scope', function () {
    expect(MainCtrl.awesomeThings.length).toBe(3);
  });*/
});
