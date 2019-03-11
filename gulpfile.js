const gulp = require('gulp');
const watch = require('gulp-watch');

gulp.task('default', () => {
  console.log('default');
});

gulp.task('html', () => {
  console.log('html');
});

gulp.task('html', () => {
  console.log('html');
});

gulp.task('watch', () => {
  watch('./app/index.html', () => {
    gulp.start('html');
  });
});