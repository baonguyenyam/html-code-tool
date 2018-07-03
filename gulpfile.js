var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var streamqueue  = require('streamqueue');
var removeUseStrict = require("gulp-remove-use-strict");
var cleanCSS = require('gulp-clean-css');
var runSequence = require('run-sequence');

gulp.task('scripts', function() {
  return streamqueue({ objectMode: true },
    gulp.src('app/**/*.module.js'),
    gulp.src('app/**/*.config.js'),
    gulp.src('app/**/*.service.js'),
    gulp.src('app/**/*.factory.js'),
    gulp.src('app/**/*.component.js'),
    gulp.src('app/**/*.directive.js'),
    gulp.src('app/**/*.controller.js')
  )
  .pipe(concat('scripts.min.js'))
  .pipe(removeUseStrict())
  .pipe(uglify())
  .pipe(gulp.dest('app/dist'));
});

gulp.task('scriptsVendor', function() {
  return streamqueue({ objectMode: true },
    gulp.src('lib/angular.min.js'),
    gulp.src('lib/angular-animate.min.js'),
    gulp.src('lib/angular-messages.min.js'),
    gulp.src('lib/jquery.min.js'),
    gulp.src('app/vendor/**/*.min.js'),
    gulp.src('lib/modernizr.min.js'),
    gulp.src('lib/re-tree.min.js'),
    gulp.src('lib/ui-bootstrap.min.js'),
    gulp.src('lib/ui-bootstrap-tpls.min.js'),
    gulp.src('lib/angular-bootstrap-material.min.js'),
    gulp.src('lib/bootstrap-colorpicker-module.min.js'),
    gulp.src('lib/angular-breadcrumb.min.js'),
    gulp.src('lib/angular-google-adsense.min.js'),
    gulp.src('lib/angulartics.min.js'),
    gulp.src('lib/angulartics-ga.min.js'),
    gulp.src('lib/angular-ui-router.min.js'),
    gulp.src('lib/clipboard.min.js'),
    gulp.src('lib/ngclipboard.min.js'),
    gulp.src('lib/ng-device-detector.min.js'),
    gulp.src('lib/ui-router-metatags.min.js')
  )
  .pipe(concat('scripts-vendor.min.js'))
  .pipe(removeUseStrict())
  .pipe(uglify())
  .pipe(gulp.dest('app/dist'));
})

gulp.task('styles', function() {
  return streamqueue({ objectMode: true },
    gulp.src('app/styles/animations.css'),
    gulp.src('app/styles/styles.css')
  )
  .pipe(concat('styles.min.css'))
  .pipe(cleanCSS())
  .pipe(gulp.dest('app/dist'));
});

gulp.task('stylesVendor', function() {
  return streamqueue({ objectMode: true },
    gulp.src('app/styles/colorpicker.min.css'),
    gulp.src('app/styles/bootstrap.min.css'),
    gulp.src('app/vendor/**/*.min.css')
  )
  .pipe(concat('styles-vendor.min.css'))
  .pipe(cleanCSS())
  .pipe(gulp.dest('app/dist'));
});

gulp.task('watch', function () {
  gulp.watch('app/styles/*.css', ['styles']);
  gulp.watch('app/**/*.js', ['scripts']);
});

gulp.task('default', function(callback) {
  runSequence(
    'scripts', 
    'scriptsVendor', 
    'styles' , 
    'stylesVendor', 
    'watch',
     callback);
});
