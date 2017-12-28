'use strict';

describe('Controller: ChapterxxivCtrl', function () {

  // load the controller's module
  beforeEach(module('interactionofColorApp'));

  var ChapterxxivCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ChapterxxivCtrl = $controller('ChapterxxivCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ChapterxxivCtrl.awesomeThings.length).toBe(3);
  });
});
