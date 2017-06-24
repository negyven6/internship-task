
var gulp   = require('gulp'),
    sass   = require('gulp-sass');

/* jshint task would be here */

gulp.task('build-css', function() {
  return gulp.src('src/scss/styles.scss')
    .pipe(sass())
    .pipe(gulp.dest('src'));
});

/* updated watch task to include sass */

gulp.task('watch', function() {

  gulp.watch('src/scss/styles.scss', ['build-css']);
});


