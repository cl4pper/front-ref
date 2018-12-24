const gulp = require('gulp')
const { series, watch } = require('gulp') 
const sass = require('gulp-sass')
const uglifycss = require('gulp-uglifycss');
const sync = require('browser-sync')

sass.compiles = require('node-sass')

/*
	-- TOP LEVEL FUNCTIONS --
	gulp.task - Define tasks
	gulp.src - Point to the files to use
	gulp.dest - Point to the folder to output
	gulp.watch - Watch files and folders to change
*/

// PUBLIC TASK -  referenced at exports
function defaultTask(cb) {
	console.log('Hello, Gulp')
	cb()
}

// PRIVATE TASK -  not exported, but still can be used in series
function privateTask(cb) {
	console.log('Hello, Private Gulp')
	cb()
}

function compileSass() {
	console.log('Compiling sass...')
	return gulp.src('./src/sass/style.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./src/css'));
};

function uglifyCSS() {
	console.log('UglifyCSS')
	gulp.src('./src/css/*.css')
    	.pipe(uglifycss({
    		"maxLineLen": 50,
    		"uglyComments": true
    	}))
    	.pipe(gulp.dest('./dist'));
}

function openBrowser() {
	console.log('Opening browser...')
	sync({
		server: {
			baseDir: './src'
		}
	})

	console.log('Watching browser...')
	// watch('./src/index.html', sync.reload)
}

// watch('./src/sass/*.scss', function(cb) {
// 	console.log('Watching change...')
// 	compileSass()
// 	cb();
// })

exports.defaultTask = defaultTask
exports.openBrowser = openBrowser
exports.sass = compileSass
exports.minify = uglifyCSS

exports.default = series(openBrowser)