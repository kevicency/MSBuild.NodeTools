var gulp = require('gulp');

gulp.task('build-Debug', function() {
  return gulp.src('gulpfile.js')
    .pipe(gulp.dest('bin/Debug'));
});
