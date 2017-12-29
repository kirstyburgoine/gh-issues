var postcss = require('gulp-postcss');
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');

gulp.task('styles', function() {
	gulp
		.src('sass/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./css/'));
});

//Watch task
gulp.task('default', function() {
	gulp.watch('sass/**/*.scss', ['styles']);
});

gulp.task('css', function() {
	var plugins = [autoprefixer({ browsers: ['last 5 version'] }), cssnano()];
	return gulp
		.src('css/*.css')
		.pipe(postcss(plugins))
		.pipe(gulp.dest('./'));
});
