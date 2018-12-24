const gulp = require('gulp')
const { series, watch } = require('gulp') 
const sass = require('gulp-sass')

sass.compiles = require('node-sass')

/*
	-- TOP LEVEL FUNCTIONS --
	gulp.task - Define tasks
	gulp.src - Point to the files to use
	gulp.dest - Point to the folder to output
	gulp.watch - Watch files and folders to change
*/

// exported task
function defaultTask(cb) {
	console.log('Hello, Gulp')
	cb()
}

// not exported, but still can be used in series
function privateTask(cb) {
	console.log('Hello, Private Gulp')
	cb()
}

function compileSass() {
	console.log('Compiling sass...')
	return gulp.src('./src/sass/style.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./dist'));
};

watch('./src/sass/*.scss', function(cb) {
	console.log('Watching change...')
	compileSass()
	cb();
})

// public tasks
exports.defaultTask = defaultTask
// private tasks
exports.default = series(defaultTask, privateTask, compileSass)