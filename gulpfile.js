var gulp = require('gulp');
var jade = require('gulp-jade');
var coffee = require('gulp-coffee');
var bowerFiles = require('gulp-bower-files');
var bower = require('gulp-bower');
var sass = require('gulp-sass')

var paths = {
	coffee: ['src/coffee/**/*.coffee'],
	jade: ['src/jade/**/*.jade'],
	sass: ['src/sass/**/*.sass']
};

gulp.task('jade', function() {
	return gulp.src(paths.jade)
		.pipe(jade({locals: {}}))
		.pipe(gulp.dest('dist/'));
});

gulp.task('coffee', function() {
	return gulp.src(paths.coffee)
		.pipe(coffee())
		.pipe(gulp.dest('dist/js/'));
});

gulp.task('bower', function() {
	return bower()
	.pipe(gulp.dest('dist/lib/'));
});

gulp.task('sass', function() {
	return gulp.src(paths.sass)
        .pipe(sass())
        .pipe(gulp.dest('dist/css/'));
})

// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch(paths.jade, ['jade']);
  gulp.watch(paths.coffee, ['coffee']);
  gulp.watch(paths.sass, ['sass']);
});


gulp.task('build', ['jade', 'bower', 'coffee', 'sass']);

gulp.task('default', ['build']);
