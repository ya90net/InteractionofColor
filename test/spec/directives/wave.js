'use strict';

describe('Directive: wave', function () {

  // load the directive's module
  beforeEach(module('interactionofColorApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<wave></wave>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the wave directive');
  }));
});
