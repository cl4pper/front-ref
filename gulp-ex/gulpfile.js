const gulp = require('gulp')
const sass = require('gulp-sass')
const uglifycss = require('gulp-uglifycss');
/*
	-- TOP LEVEL FUNCTIONS --
	gulp.task - Define tasks
	gulp.src - Point to the files to use
	gulp.dest - Point to the folder to output
	gulp.watch - Watch files and folders to change
*/
 
sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
	return gulp.src('./src/sass/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./src/css'));
});

gulp.task('css', function () {
	gulp.src('./src/css/*.css')
	  .pipe(uglifycss({
		"maxLineLen": 50,
		"uglyComments": true
	  }))
	  .pipe(gulp.dest('./dist/'));
});


// SASS WATCHER
gulp.task('sass:watch', function () {
	gulp.watch('./src/sass/*.scss', ['sass']);
});