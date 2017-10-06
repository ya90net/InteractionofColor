'use strict';

describe('Controller: ChapterviiCtrl', function () {

  // load the controller's module
  beforeEach(module('interactionofColorApp'));

  var ChapterviiCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ChapterviiCtrl = $controller('ChapterviiCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ChapterviiCtrl.awesomeThings.length).toBe(3);
  });
});
