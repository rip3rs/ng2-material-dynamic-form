var gulp = require('gulp'),
sass = require('gulp-sass'),
runSequence = require('run-sequence'),
minifyCss = require('gulp-minify-css'),
// sourcemaps = require('gulp-sourcemaps'),
tsc = require('gulp-typescript'),
embedTemplates = require('gulp-inline-ng2-template'),
exec = require('child_process').exec;

//----
//build steps
gulp.task('build', function (done) {

  runSequence(
    'clean',
    'compile-sass',
    'index-inline-template',
    'inline-templates',
    'build-using-ngc'
  );

});

//----
//clearing the output dir
gulp.task('clean', function (done) {
  exec('rm -rf tmp && rm -rf dist', function (err, stdOut, stdErr) {
    if (err){
      done(err);
    } else {
      done();
    }
  });
});

//----
//Sass compilation and minifiction
gulp.task('compile-sass', function () {
  gulp.src('src/**/**/**/*.scss')
   .pipe(sass().on('error', sass.logError)) // this will prevent our future watch-task from crashing on sass-errors
   .pipe(minifyCss()) // see the gulp-sass doc for more information on compatibilitymodes
   .pipe(gulp.dest(function(file) {
   return file.base; // because of Angular 2's encapsulation, it's natural to save the css where the scss-file was
}));
});

gulp.task('index-inline-template', function() {
  var tsResult = gulp.src('index.ts')
    .pipe(embedTemplates({
      useRelativePaths: true
    }))

  return tsResult.pipe(gulp.dest('tmp'));
});

gulp.task('inline-templates', function() {
  var tsResult = gulp.src('./src/**/*.ts')
    .pipe(embedTemplates({
      useRelativePaths: true
    }))

  return tsResult.pipe(gulp.dest('tmp/src'));
});

gulp.task('build-using-ngc', function (done) {
  exec('node_modules/.bin/ngc -p tsconfig.json && cp package.json README.md ./dist && shopt -s dotglob nullglob && mv dist/tmp/* dist && rm -rf dist/tmp && rm -rf tmp', function (err, stdOut, stdErr) {
    if (err){
      done(err);
    } else {
      done();
    }
  });
});
