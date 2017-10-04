'use strict';

describe('Service: ColorPickerService', function () {

  // load the service's module
  beforeEach(module('interactionofColorApp'));

  // instantiate service
  var ColorPickerService;
  beforeEach(inject(function (_ColorPickerService_) {
    ColorPickerService = _ColorPickerService_;
  }));

  it('should do something', function () {
    expect(!!ColorPickerService).toBe(true);
  });

});
