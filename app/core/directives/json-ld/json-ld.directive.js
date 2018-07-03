(function () {
  'use strict';

  angular.module('app.core.directives')
  .directive('jsonld', ['$filter', '$sce', function($filter, $sce) {
    return {
      restrict: 'E',
      template: function() {
        return '<script type="application/ld+json" ng-bind-html="onGetJson()"></script>';
      },
      scope: {
        json: '=json'
      },
      link: function(scope, element, attrs) {
        scope.onGetJson = function() {
          return $sce.trustAsHtml($filter('json')(scope.json));
        }
      },
      replace: true
    };
  }]);
})();
