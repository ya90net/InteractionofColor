'use strict';

describe('Controller: ChapterviiiCtrl', function () {

  // load the controller's module
  beforeEach(module('interactionofColorApp'));

  var ChapterviiiCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ChapterviiiCtrl = $controller('ChapterviiiCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ChapterviiiCtrl.awesomeThings.length).toBe(3);
  });
});
