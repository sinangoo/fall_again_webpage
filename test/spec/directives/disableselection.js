'use strict';

describe('Directive: disableselection', function () {

  // load the directive's module
  beforeEach(module('FallAgainApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<disableselection></disableselection>');
    element = $compile(element)(scope);
  }));
});
