var gulp = require("gulp");
var cleanCSS = require("gulp-clean-css");
var concat = require("gulp-concat");
var minify = require("gulp-minify");
var path = require("path");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var sourcemaps = require("gulp-sourcemaps");
var open = require("gulp-open");
var Paths = {
  HERE: "./",
  DIST: "./css/",
  CSS: "./css",
  SCSS_TOOLKIT_SOURCES: "./styles/theme.scss",
  SCSS: "styles/**/**",
};

gulp.task("compile-scss", function () {
  return gulp
    .src(Paths.SCSS_TOOLKIT_SOURCES)
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write(Paths.HERE))
    .pipe(gulp.dest(Paths.CSS));
});

