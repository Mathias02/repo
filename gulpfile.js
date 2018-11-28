var gulp = require('gulp'),
  plumber = require('gulp-plumber'),
  sass = require('gulp-sass'),
  imagemin = require('gulp-imagemin')
autoprefixer = require('gulp-autoprefixer');


gulp.task('style', function () {
  gulp.src('app/sass/**/*.scss')
    .pipe(plumber())
    .pipe(autoprefixer('last 2 versions'))
    .pipe(sass())
    .pipe(gulp.dest('app/css'));
})

gulp.task('compress', function () {
  gulp.src('app/preimg/*')
    .pipe(imagemin({ optimization: 7 }))
    .pipe(gulp.dest('app/img'));
})


gulp.task('html', function () {
  gulp.src('app/**/*.html')
})


gulp.task('watch', function () {
  gulp.watch('app/sass/**/*.scss', ['style']);
  gulp.watch('app/**/*.html', ['html']);
})

gulp.task('default', ['style', 'html', 'watch']);