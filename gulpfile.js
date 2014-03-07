var gulp = require('gulp');
var jade = require('gulp-jade');
var coffee = require('gulp-coffee');
var bowerFiles = require('gulp-bower-files');
var bower = require('gulp-bower');

var paths = {
	scripts: ['src/coffee/**/*.coffee'],
	jade: ['src/jade/**/*.jade']
};

gulp.task('jade', function() {
	return gulp.src(paths.jade)
		.pipe(jade({locals: {}}))
		.pipe(gulp.dest('dist/'));
});

gulp.task('coffee', function() {
	return gulp.src(paths.scripts)
		.pipe(coffee())
		.pipe(gulp.dest('dist/js/'));
});

gulp.task('bower', function() {
	return bower();
});

gulp.task('build', ['jade', 'bower', 'coffee']);