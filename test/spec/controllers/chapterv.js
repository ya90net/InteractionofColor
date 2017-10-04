'use strict';

describe('Controller: ChaptervCtrl', function () {

  // load the controller's module
  beforeEach(module('interactionofColorApp'));

  var ChaptervCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ChaptervCtrl = $controller('ChaptervCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ChaptervCtrl.awesomeThings.length).toBe(3);
  });
});
