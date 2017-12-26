'use strict';

describe('Controller: ChapterxxiiiCtrl', function () {

  // load the controller's module
  beforeEach(module('interactionofColorApp'));

  var ChapterxxiiiCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ChapterxxiiiCtrl = $controller('ChapterxxiiiCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ChapterxxiiiCtrl.awesomeThings.length).toBe(3);
  });
});
