'use strict';

/* Directives */
var allDirectives = angular.module('allDirectives', []);

allDirectives.directive('editableRow', function() {
  return {
    restrict: 'E',
    templateUrl: 'partials/editableRow.html',
    replace: true
  };
});