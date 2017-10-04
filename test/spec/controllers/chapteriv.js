'use strict';

describe('Controller: ChapterivCtrl', function () {

  // load the controller's module
  beforeEach(module('interactionofColorApp'));

  var ChapterivCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ChapterivCtrl = $controller('ChapterivCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ChapterivCtrl.awesomeThings.length).toBe(3);
  });
});
