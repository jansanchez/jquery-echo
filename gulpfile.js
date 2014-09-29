'use strict';

var gulp = require('gulp'),
	jshint = require('gulp-jshint'),
	stylish = require('jshint-stylish');

var path = { src: {} };

path.src.js = ['./src/*.js'];
path.src.complexity = ['./src/*.js'];

gulp.task('default', ['lint'], function() {
	console.log('All the Javascript.');
});

gulp.task('lint', function() {
	return gulp.src(path.src.js)
		.pipe(jshint('.jshintrc'))
		.pipe(jshint.reporter('jshint-stylish'))
		.pipe(jshint.reporter('fail'));
});

gulp.task('watch', function () {
	var javascriptTasks = ['lint'];

	gulp.watch(path.src.js, javascriptTasks);
});
