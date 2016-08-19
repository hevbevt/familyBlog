/**
 * Created by duanhe on 16/7/30.
 */
var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    gutil = require('gulp-util'),
    concat = require('gulp-concat'),
    concatCss = require('gulp-concat-css'),
    uglify = require('gulp-uglify');

gulp.task('default',['watch']);

gulp.task('jshint', function () {
    return gulp.src('src/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('build-sass', function () {
    return gulp.src('src/sass/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(concatCss('all.css'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('public/stylesheets'));
});
gulp.task('build-css', function () {
    return gulp.src('src/css/**/*.css')
        .pipe(sourcemaps.init())
        .pipe(concatCss('depCss.css'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('public/stylesheets'));
});
gulp.task('build-dep-js', function () {
    return gulp.src([
        'node_modules/.npminstall/jquery/1.11.3/jquery/dist/jquery.js',
        'src/js/lib/angular.js',
        'src/js/lib/angular-animate.js',
        'src/js/lib/angular-touch.js',
        'src/js/lib/ui-bootstrap.js',
        'src/js/lib/angular-ui-router.js',
        'src/js/lib/bootstrap.js',
        'node_modules/ag-grid/dist/ag-grid.js'])
        .pipe(gulp.dest('public/js/lib'));
});
gulp.task('build-js', function () {
    return gulp.src('src/js/frontend/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(concat('bundle.js'))
        .pipe(gutil.env.type === 'production' ? uglify() : gutil.noop())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('public/js'));
});
gulp.task('copyPartials', function() {
    // copy any html files in source/ to public/
    gulp.src('src/partials/*.html').pipe(gulp.dest('public/partials'));
});

gulp.task('build',['build-css', 'build-sass','build-dep-js', 'build-js', 'copyPartials']);

//watch html, js, sass change and apply.
gulp.task('watch', function () {
    gulp.watch('src/js/frontend/**/*.js', ['build-js']);
    gulp.watch('src/partials/*.html', ['copyPartials']);
    gulp.watch('src/sass/**/*.scss', ['build-sass']);
});

gulp.task('buildWatch', ['build', 'watch']);