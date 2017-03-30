var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();


// Static Server + watching scss/html files
gulp.task('serve', ['scss'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("./scss/**", ['scss']);
    gulp.watch("/*.html").on('change', browserSync.reload);
});


gulp.task('scss', function(){

  return gulp.src('./scss/**')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('./css'))
  .pipe(browserSync.stream())

})




gulp.task('default', ['serve']);