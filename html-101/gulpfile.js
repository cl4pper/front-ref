const gulp = require('gulp')
const { series, watch } = require('gulp')
const sass = require('gulp-sass')
const uglifycss = require('gulp-uglifycss')
const sync = require('browser-sync').create()

const sass_src = './app/scss/main.scss'
const css_src = './app/css/main.css'

// task to process the sass file into css
function compileSASS() {
    console.log('Compiling sass...')
    return gulp.src('./app/scss/main.scss') // --> where is the file to be worked
        .pipe(sass())
        .pipe(gulp.dest('./app/css/')) // --> compiled file destination
        // .pipe(sync.stream())
        .pipe(sync.reload({
            stream: true
        }))
}

// task to uglify css code
function uglifyCSS() {
    console.log('Uglifying code...')
    return gulp.src('./app/css/*.css')
        .pipe(uglifycss({
            "maxLineLen": 50,
            "uglifyComments": true
        }))
        .pipe(gulp.dest('./app/dist/'))
}

// task to open browser when the app starts
function loadApp() {
    console.log('Loading browser...')
    sync.init({
        server: {
            baseDir: './app'
        },
    })
}

// watches changes on main.scss file and apply those unto app style
watch(sass_src, series(compileSASS, uglifyCSS))

// MAIN FUNCTION
exports.default = series(compileSASS, uglifyCSS, loadApp)