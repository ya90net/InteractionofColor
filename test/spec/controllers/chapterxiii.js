'use strict';

describe('Controller: ChapterxiiiCtrl', function () {

  // load the controller's module
  beforeEach(module('interactionofColorApp'));

  var ChapterxiiiCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ChapterxiiiCtrl = $controller('ChapterxiiiCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ChapterxiiiCtrl.awesomeThings.length).toBe(3);
  });
});
