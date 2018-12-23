const gulp = require('gulp')

/*
	-- TOP LEVEL FUNCTIONS --
	gulp.task - Define tasks
	gulp.src - Point to the files to use
	gulp.dest - Point to the folder to output
	gulp.watch - Watch files and folders to change
*/

gulp.task('msg', function() {
	return console.log('gulp is running..')
})

gulp.task('copyHTML', function() {
	gulp.src('src/*.html')
		.pipe(gulp.dest('dist'))
})