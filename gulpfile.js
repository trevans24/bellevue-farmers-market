// Require Gulp for SASS
let gulp = require('gulp'),
	sass = require('gulp-sass'),
	cleanCSS = require('gulp-clean-CSS');

// Default Gulp Task

gulp.task('default', function(){
	console.log('Default Task');
	gulp.watch('src/**/*.scss', ['styles']);
});

// GULP RUNNING CSS minified

gulp.task('styles', function(){
	gulp.src('src/**/*.scss')
	.pipe(sass().on('error', sass.logError))
	// .pipe(cleanCSS())
	.pipe(gulp.dest('./public/styles/'));
});