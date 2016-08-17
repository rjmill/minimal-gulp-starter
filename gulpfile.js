var gulp = require('gulp');
var del = require('del');
var browserSync = require('browser-sync').create();

// Static server
gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: "./app"
    }
  });

  gulp.watch('app/css/**/*.css').on('change', browserSync.reload);
  gulp.watch('app/javascript/**/*.js').on('change', browserSync.reload);
  gulp.watch('app/**/*.html').on('change', browserSync.reload);
});

gulp.task('default', ['serve']);
