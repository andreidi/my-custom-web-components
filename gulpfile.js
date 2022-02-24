'use strict';

/* eslint-disable no-undef */
const { src, dest, task, series } = require('gulp');
const minify = require('gulp-minify');
const del = require('del');
/* eslint-enable no-undef */

const cleanup = () => {
  return del(['build']);
};

const build = () => {
  return src('src/components/**/*.js')
    .pipe(
      minify({
        ext: {
          min: '.min.js',
        },
        noSource: true,
      })
    )
    .pipe(dest('build'));
};

task('build', series(cleanup, build));
