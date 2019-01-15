const gulp = require('gulp')
const { series, watch } = require('gulp')
const sass = require('gulp-sass')
const uglifycss = require('gulp-uglifycss')
const sync = require('browser-sync')

// task to process the sass file into css
function compileSASS() {
    console.log('Compiling sass...')
    return gulp.src('./app/scss/main.scss') // --> where is the file to be worked
        .pipe(sass())
        .pipe(gulp.dest('./app/css/')) // --> compiled file destination
        .pipe(sync.stream()) //
}

// task to uglify css code
function uglifyingCSS() {
    console.log('Uglifying code...')
    return gulp.src('./app/css/*.css')
        .pipe(uglifycss({
            "maxLineLen": 50,
            "uglifyComments": true
        }))
        .pipe(gulp.dest('./app/dist/'))
}

// task to open browser when the app starts
function loadBrowser() {
    console.log('Loading browser...')
    sync({
        server: {
            baseDir: './app'
        }
    })
    console.log('Watching browser...')
}

// task to watch changes made on html or styles files
// gulp.task('serve', ['sass'], function() {
    
//     sync.init({
//         server: './'
//     })

//     gulp.watch('./src/styles/index.scss', ['sass'])
//     gulp.watch('./*.html').on('change', sync.reload)
// })

exports.default = series(compileSASS, uglifyingCSS, loadBrowser)