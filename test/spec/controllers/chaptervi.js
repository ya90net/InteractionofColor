'use strict';

describe('Controller: ChapterviCtrl', function () {

  // load the controller's module
  beforeEach(module('interactionofColorApp'));

  var ChapterviCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ChapterviCtrl = $controller('ChapterviCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ChapterviCtrl.awesomeThings.length).toBe(3);
  });
});
