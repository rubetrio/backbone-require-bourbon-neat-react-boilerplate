var gulp = require('gulp');
var sass = require('gulp-sass');

var paths = {
  sass: ['./scss/**/*.scss']
};

gulp.task('sass', function(done) {
  gulp.src('scss/app.scss')
    .pipe(sass({
      includePaths: [
        require('bourbon').includePaths,
        require('bourbon-neat').includePaths
      ]
    }))
    .on('error', sass.logError)
    .pipe(gulp.dest('www_backbone/css/'));
});

gulp.task('default', function() {
  gulp.watch('scss/app.scss', ['sass']);
});
