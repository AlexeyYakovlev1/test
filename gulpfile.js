const gulp = require("gulp");
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require("gulp-sourcemaps");

gulp.task("sass-compile", () => {
	return gulp.src("./styles/**/*.sass")
		.pipe(sourcemaps.init())
		.pipe(sass().on("error", sass.logError))
		.pipe(sourcemaps.write("./"))
		.pipe(gulp.dest('./public/css/'));
});

gulp.task("watch", () => {
	gulp.watch("./styles/**/*.sass", gulp.series("sass-compile"));
});