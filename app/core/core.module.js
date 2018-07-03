(function () {
  'use strict';

  // Core module.
  angular.module('app.core',
    [
      'app.core.services',
      'app.core.components',
      'app.core.directives',
      'ng',
      'angulartics',
      'angulartics.google.analytics',
      'ui.router',
      'ncy-angular-breadcrumb',
      'ngAnimate',
      'colorpicker.module',
      'ui.bootstrap',
      'angularBootstrapMaterial',
      'angular-google-adsense',
      'ngclipboard',
      'ng.deviceDetector',
      'ui.router.metatags'
    ]);
})();
