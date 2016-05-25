var gulp = require('gulp');
var sass = require('gulp-sass');
var babel = require('gulp-babel');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');

var paths = {
  sass: ['./scss/**/*.scss'],
  jsx: ['./**/*.jsx']
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
    .pipe(gulp.dest('www_backbone/css/'))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifyCss())
    .pipe(gulp.dest('www_backbone/css/'))
    .on('end', done);
});

gulp.task('jsx', function(done){
  gulp.src(paths.jsx)
    .pipe(babel({
      presets: ['react', 'es2015']
    }))
    .pipe(gulp.dest('.'))
    .on('end', done);
});

gulp.task('watch', function() {
  gulp.watch(paths.sass, ['sass']);
  gulp.watch(paths.jsx, ['jsx']);
});

gulp.task('default', ['sass', 'jsx', 'watch']);
