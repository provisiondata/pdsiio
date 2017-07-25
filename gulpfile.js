var gulp = require('gulp'); //default
var sass = require('gulp-sass');//sass complie
var concat = require('gulp-concat'); //compile js plugins into one file
var concatCss = require('gulp-concat-css');//compile css plugins into one file
var watch = require('gulp-watch'); //sass compile to css

gulp.task('sass', function () {
    return gulp.src('html/scss/**/*.scss')
            .pipe(sass().on('error', sass.logError))
            .pipe(gulp.dest('html/css/'));
});
gulp.task('watch', function () {
    gulp.watch('html/scss/**/*.scss', ['sass', 'concat', 'concatCss']);
});

gulp.task('concat', function () {
    return gulp.src(
            [
                'html/bower_components/jquery/dist/jquery.min.js',
                'html/bower_components/tether/dist/js/tether.min.js',
                'html/bower_components/bootstrap/dist/js/bootstrap.min.js'
            ])
            .pipe(concat('plugins.js'))
            .pipe(gulp.dest('html/js/plugins/'));
});

gulp.task('concatCss', function () {
    return gulp.src([
        'html/bower_components/bootstrap/dist/css/bootstrap.min.css',
        'html/bower_components/font-awesome/css/font-awesome.min.css'
    ])
            .pipe(concatCss("plugins/plugins.css"))
            .pipe(gulp.dest('html/css/'));
});