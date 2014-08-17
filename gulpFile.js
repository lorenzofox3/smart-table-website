var gulp = require('gulp');
var concat = require('gulp-concat');
var disFolder = './assets/';
var js = ['sections/head/code.js',
    'sections/basics/code.js',
    'sections/format/code.js',
    'sections/sort/code.js',
    'sections/filter/code.js',
    'sections/selection/code.js',
    'sections/pagination/code.js',
    'sections/plugins/code.js'];
var html = ['sections/head/markup.html',
    'sections/introduction/markup.html',
    'sections/basics/markup.html',
    'sections/format/markup.html',
    'sections/sort/markup.html',
    'sections/filter/markup.html',
    'sections/selection/markup.html',
    'sections/pagination/markup.html',
    'sections/plugins/markup.html',
    'sections/foot/markup.html'];


//modules
gulp.task('html', function () {
    gulp.src(html)
        .pipe(concat('index.html'))
        .pipe(gulp.dest('./'));
});

gulp.task('js', function () {
    gulp.src(js)
        .pipe(concat('app.js'))
        .pipe(gulp.dest(disFolder + 'js/'));
});

gulp.task('default',['js','html']);





