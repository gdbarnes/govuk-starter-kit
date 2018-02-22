'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const size = require('gulp-size');
const rename = require('gulp-rename');

const config = {
  srcSass: './public/sass/**/*.scss',
  srcTemplate: './node_modules/govuk_template_jinja/assets/**/*',
  outputDir: './build/assets'
};

const compileSass = () => {
  return gulp
    .src(config.srcSass)
    .pipe(
      sass({
        includePaths: [
          './node_modules/govuk_frontend_toolkit/stylesheets',
          './node_modules/govuk-elements-sass/public/sass'
        ]
      }).on('error', sass.logError)
    )
    .pipe(
      size({
        showFiles: false,
        title: 'Compiled Sass: '
      })
    )
    .pipe(gulp.dest(config.outputDir + '/stylesheets'));
};

const copyTemplateAssets = () => {
  return gulp
    .src(config.srcTemplate)
    .pipe(
      size({
        showFiles: false,
        title: 'Template assets:'
      })
    )
    .pipe(gulp.dest(config.outputDir));
};

const minifyCss = () => {
  return gulp
    .src(config.outputDir + '/stylesheets/*.css')
    .pipe(cleanCSS({ compatibility: 'ie7' }))
    .pipe(
      rename({
        suffix: '.min'
      })
    )
    .pipe(
      size({
        showFiles: false,
        title: 'Minified css: '
      })
    )
    .pipe(gulp.dest(config.outputDir + '/stylesheets/minified'));
};

gulp.task('compileSass', compileSass);
gulp.task('copyTemplateAssets', ['compileSass'], copyTemplateAssets); // wait for compileSass to finish
gulp.task('minifyCss', ['copyTemplateAssets'], minifyCss); // wait for copyTemplateAssets to finish

gulp.task('default', ['minifyCss']);
