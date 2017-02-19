var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var connect = require('gulp-connect');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var webserver = require('gulp-webserver');
var rename = require('gulp-rename');
var concatCss = require('gulp-concat-css');
var minifyCss = require('gulp-minify-css');
var plumber = require('gulp-plumber');

gulp.task('connect', function () {
	gulp.src('./')
  .pipe(webserver({
    livereload: true,
    directoryListing: true,
    open: true,
    port: 4050
  }))
});

gulp.task('html', function () {
  return gulp.src('app/**/*.html')
        .pipe(gulp.dest('public'))
        .pipe(connect.reload());
      });

gulp.task('browserify', function() {
	// Grabs the app.js file
    return browserify('./app/app.js')
    	// bundles it and creates a file called main.js
        .bundle()
        .pipe(source('main.js'))
        // saves it the public/js/ directory
        .pipe(gulp.dest('./public/js/'));
});

gulp.task('css', function () {
  gulp.src('css/*.css')
    .pipe(plumber())
    .pipe(concatCss('main.css'))
    .pipe(minifyCss())
    .pipe(rename('main.min.css'))
    .pipe(gulp.dest('public/css'))
    .pipe(connect.reload());
});

// gulp.task('MAXcss', function () {
//   gulp.src('bower_components/**/**/**/*.css')
//     .pipe(plumber())
//     .pipe(concatCss('mainMAX.css'))
//     .pipe(minifyCss())
//     .pipe(rename('mainMAX.min.css'))
//     .pipe(gulp.dest('public/css'))
//     .pipe(connect.reload());
// });

gulp.task('sass', function() {
	return sass('sass/*.sass')
		.pipe(gulp.dest('public/css'))
});

gulp.task('watch', function() {
	gulp.watch('app/**/*.js', ['browserify'])
  gulp.watch('css/*.css', ['css'])
	gulp.watch('app/**/*.html', ['html'])
});

gulp.task('default', ['connect', 'watch']);