const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const babel = require('gulp-babel');


// Static Server + watching scss/html files
gulp.task('serve', ['scss'], ['js'],  function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("./scss/**", ['scss']);
    gulp.watch("./js/**", ['js']);
    gulp.watch("/*.html").on('change', browserSync.reload);
});

gulp.task('scss', function(){

  return gulp.src('./scss/**')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('./css'))
  .pipe(browserSync.stream())

})


gulp.task('js', function(){

	

})






gulp.task('default', ['serve']);