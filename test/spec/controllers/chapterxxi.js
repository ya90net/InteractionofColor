'use strict';

describe('Controller: ChapterxxiCtrl', function () {

  // load the controller's module
  beforeEach(module('interactionofColorApp'));

  var ChapterxxiCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ChapterxxiCtrl = $controller('ChapterxxiCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ChapterxxiCtrl.awesomeThings.length).toBe(3);
  });
});
