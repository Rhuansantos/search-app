const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const babel = require('gulp-babel');



gulp.task('scss', () => {

  return gulp.src('./scss/**')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('./css'))
  .pipe(browserSync.stream())

});


gulp.task('es6', () => {

    return gulp.src('js/main.js')
    .pipe(babel({
        presets: ['es2015']
    }))
    .pipe(gulp.dest('build'));

        console.log('=======test======');


});


gulp.task('serve', () => {

    browserSync.init({
        server: "./"
    });

    gulp.watch("./scss/**", ['scss']);
    gulp.watch("js/main.js", ['es6']);
    gulp.watch("/*.html").on('change', browserSync.reload);

});



gulp.task('default', ['serve'], () => {



});