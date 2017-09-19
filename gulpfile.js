var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var cleanCss = require('gulp-clean-css');
var browserify = require('browserify');
var babelify = require('babelify');
var babel = require('gulp-babel');
var source = require('vinyl-source-stream');
var ngAnnotate = require("browserify-ngannotate");


gulp.task('compile', () => {
    browserify('./application/app/app.js')
    .transform(babelify, {presets: ["es2015"]})
    .transform(ngAnnotate)
    .bundle()
    .pipe(source('script.js'))
    .pipe(gulp.dest('./application/app/build/script/'));
})

// gulp.task('minifyCss', () => {
//     gulp.src('app/css/*.css')
//         .pipe(concat('style.css'))
//         .pipe(cleanCss())
//         .pipe(gulp.dest('app/build/style/'));
// });

gulp.task('watch', () => {
    gulp.watch('./application/app/**/*.js', function(){
        gulp.run('compile');
    });    
});
//gulp.task('build', ['minifyJs', 'minifyCss']);