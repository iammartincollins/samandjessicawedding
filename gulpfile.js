var gulp = require('gulp');
var less = require('gulp-less');
var concat = require('gulp-concat');

gulp.task('less', function () {
    return gulp.src('./app/assets/less/site.less')
        .pipe(less())
        .pipe(gulp.dest('./app/public/css'));
});

gulp.task('scripts', function() {
    return gulp.src('./app/assets/**/*.js')
        .pipe(concat('site.js'))
        .pipe(gulp.dest('./app/public/js/'));
});

gulp.task('build', ['less', 'scripts']);