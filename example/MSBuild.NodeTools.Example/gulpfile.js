var gulp = require('gulp');
var del = require('del');

gulp.task('build-Debug', function() {
  return gulp.src('gulpfile.js')
    .pipe(gulp.dest('bin/Debug'));
});

gulp.task('clean', function (cb) {
  del(['bin/Debug/gulpfile.js'], cb);
});
