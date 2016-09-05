var gulp = require('gulp');
var browserSync = require('browser-sync').create();

// Static server
gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: "./app"
    }
  });

  gulp.watch('app/css/**/*.css').on('change', browserSync.reload);
  gulp.watch('app/js/**/*.js').on('change', browserSync.reload);
  // TODO: figure out a better way to do the HTML part of this
  gulp.watch('app/**/*.html').on('change', browserSync.reload);
});

gulp.task('default', ['serve']);
