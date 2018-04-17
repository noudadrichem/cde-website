'use strict'

const gulp = require('gulp')
const svgSprite = require('gulp-svg-sprite')
const plumber = require('gulp-plumber')
const clean = require('gulp-clean')

const config = {
  shape: {
    dimension: {
      maxWidth: 32,
      maxHeight: 32
    },
    spacing: {
      padding: 0
    },
  },
  mode: {
    symbol: true
  }
};

gulp.task('output-sprite', function() {
  gulp.src('./src/assets/images/icons/**/*.svg')
    .pipe(plumber())
    .pipe(svgSprite(config))
    .pipe(gulp.dest('./src/assets/images/icons/sprite'))
})

gulp.task('clean-old-sprite', function() {
  return gulp.src('./src/assets/images/icons/sprite', { read: false })
    .pipe(clean());
})

gulp.task('generate', ['clean-old-sprite', 'output-sprite'])
