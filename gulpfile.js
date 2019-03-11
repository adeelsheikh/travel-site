const gulp = require('gulp');
const watch = require('gulp-watch');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssVars = require('postcss-simple-vars');
const nested = require('postcss-nested');
const cssImport = require('postcss-import');

gulp.task('default', () => {
  console.log('default');
});

gulp.task('html', () => {
  console.log('html');
});

gulp.task('styles', () => {
  return gulp.src('./app/assets/styles/site.css')
    .pipe(postcss([
      cssImport, cssVars, nested, autoprefixer
    ]))
    .pipe(gulp.dest('./app/dist/assets/styles'));
});

gulp.task('watch', () => {
  watch('./app/index.html', () => {
    gulp.start('html');
  });

  watch('./app/assets/styles/**/*.css', () => {
    gulp.start('styles');
  });
});