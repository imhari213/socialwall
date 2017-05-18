var gulp=require('gulp');
var uglify=require('gulp-uglify');
gulp.task('default',function(){
	console.log("Task is running");
});

gulp.task('watch',function(){
	gulp.watch('controller/*.js')
});

gulp.task('scripts',function(){
	gulp.src('controller/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('build/js'));
});