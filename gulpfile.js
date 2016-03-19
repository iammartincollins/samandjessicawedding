var gulp = require('gulp');
var less = require('gulp-less');

gulp.task('less', function () {
    return gulp.src('./app/assets/less/site.less')
        .pipe(less())
        .pipe(gulp.dest('./app/public/css'));
});