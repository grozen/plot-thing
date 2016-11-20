'use strict';

var babelify = require('babelify');
var browserify = require('browserify');
var buffer = require('vinyl-buffer');
var gulp = require('gulp');
var gutil = require('gulp-util');
var merge = require('lodash.merge');
var source = require('vinyl-source-stream');
var sourcemaps = require('gulp-sourcemaps');
var watchify = require('watchify');

// Custom browserify options
var browserifyOptions = {
  entries: ['./app/client/main.js'],
  debug: true
};

browserifyOptions = merge(browserifyOptions, watchify.args)

var watcher = watchify(browserify(browserifyOptions));
watcher.transform(babelify)

gulp.task('build_client', build_client);
watcher.on('update', bundle); // on any dependency update, runs the bundler
watcher.on('log', gutil.log); // output build logs to terminal

function build_client() {
  bundle();
  copy_css();
  copy_vendor_files();
}

function copy_css() {
  gulp.src('app/style/**/*').pipe(gulp.dest('./dist/stylesheets'))
}

function copy_vendor_files() {
  gulp.src('node_modules/furtive/css/furtive.min.css')
    .pipe(gulp.dest('./dist'))
}

function bundle() {
  return watcher.bundle()
    .on('error', gutil.log.bind(gutil, 'Browserify Error')) // log errors if they happen
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true})) // loads map from browserify file
    .pipe(sourcemaps.write('./')) // writes .map file
    .pipe(gulp.dest('./dist'));
}
