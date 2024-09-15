const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();

// Task to compile Sass files and reload browser
function compileSass() {
  return gulp.src('src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('src/css'))
    .pipe(browserSync.stream()); // Reload browser
}

// Task to watch for changes in Sass and HTML files
function watch() {
  browserSync.init({
    server: {
      baseDir: './src'
    }
  });

  gulp.watch('src/scss/**/*.scss', compileSass);
  gulp.watch('src/*.html').on('change', browserSync.reload);
}

// Export watch task
exports.watch = watch;
