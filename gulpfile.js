var gulp = require('gulp');
var rename = require("gulp-rename");
var crisper = require("gulp-crisper");
var gulpIf = require('gulp-if');
var babel = require('gulp-babel');
var sourcemaps = require('gulp-sourcemaps');
var inlineSource = require('gulp-inline-source');
var browserSync = require('browser-sync').create();
var clean = require('gulp-clean');
var replace = require('gulp-replace');
var cdnizer = require("gulp-cdnizer");
var fs = require("fs");

gulp.task('init:rename', function () {
var element = __dirname.split('/');
return gulp.src(["./*.*", "./{demo,test}/*.*", "!./{package,bower,gulpfile}.{json,js}"])
	  .pipe(replace('epic-element', element[element.length-1]))
	  .pipe(replace('EpicElement', element[element.length-1]
	  		.replace('-', ' ')
			.replace(/\w\S*/g, function(txt){
				return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
			})
		))
	  .pipe(rename(function (path) {
	    path.dirname = path.dirname.replace('epic-element', element[element.length-1]);
	    path.basename = path.basename.replace('epic-element', element[element.length-1]);
	  }))
	  .pipe(gulp.dest("."));
});



gulp.task('js:transpile', function () {
	return gulp.src(['*.es6.js'])
        .pipe(babel({
          presets: ['es2015']
        }))
        .pipe(rename(function(opt) {
           opt.basename = opt.basename.replace(/(.es6)/ig, '');
           return opt;
         }))
        .pipe(gulp.dest('.'));
});

gulp.task('serve', ['js:transpile'], function() {

    var element = __dirname.split('/');
    browserSync.init({
        proxy: "localhost:8080",
        startPath: "/components/" + element[element.length-1] + "/demo/"
    });

    // gulp.watch('{src,bower_components}/**/*.html', ['html']);
    gulp.watch('*.es6.js', ['js:transpile']);
    gulp.watch(['*.js', '*.html', '!*.es6.js']).on('change', browserSync.reload);
});
