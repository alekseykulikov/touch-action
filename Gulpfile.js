var gulp   = require("gulp");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");

gulp.task("compressed", function () {
  return gulp.src("src/*.js")
    .pipe(uglify())
    .pipe(rename("touch-action.min.js"))
    .pipe(gulp.dest("dist/"));
});

gulp.task("uncompressed", function () {
  return gulp.src("src/*.js")
    .pipe(rename("touch-action.js"))
    .pipe(gulp.dest("dist/"));
});

gulp.task("build", ["compressed", "uncompressed"]);
gulp.task("default", ["build"]);