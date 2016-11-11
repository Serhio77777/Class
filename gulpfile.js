'use strict';

const gulp = require('gulp'),
    runSequence = require('run-sequence'),
    browserify = require('browserify'),
    babelify = require('babelify'),
    rimraf = require('rimraf'),
    source = require('vinyl-source-stream'),
    sourcemaps = require('gulp-sourcemaps'),
    buffer = require('vinyl-buffer'),
    ngAnnotate = require('gulp-ng-annotate'),
    uglify = require('gulp-uglify'),

    scss = require('gulp-sass'),
    concat = require('gulp-concat'),

    /* nicer browserify errors */
    gutil = require('gulp-util'),
    chalk = require('chalk');

// variables
const config = {
    scriptSources: './app/scripts/**/*.js',
    entryFileScript: './app/scripts/app.js',
    outputFileScript: 'test.js',
    entryFileStyle: './app/scss/*.scss',
    styleSources: './app/scss/**/*.scss',
    outputFileStyle: 'styles.css',
    outputDir: './dist/'
};

gulp.task('default', () => {
    runSequence(
        'clean',
        ['styles', 'scripts']
    );
});

// clean the output directory
gulp.task('clean', cb => {
    return rimraf(config.outputDir, cb);
});

// styles
gulp.task('styles', () => {
    return gulp.src(config.entryFileStyle)
        .pipe(sourcemaps.init())
        .pipe(scss({outputStyle: 'compressed'}))
        .pipe(concat(config.outputFileStyle))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.outputDir));
});

// mapping errors during browserify work
function map_error(err) {
    if (err.fileName) {
        // regular error
        gutil.log(chalk.red(err.name)
            + ': '
            + chalk.yellow(err.fileName.replace(__dirname + '/app/scripts/', ''))
            + ': '
            + 'Line '
            + chalk.magenta(err.lineNumber)
            + ' & '
            + 'Column '
            + chalk.magenta(err.columnNumber || err.column)
            + ': '
            + chalk.blue(err.description));
    } else {
        // browserify error..
        gutil.log(chalk.red(err.name)
            + ': '
            + chalk.yellow(err.message));
    }

    this.emit('end');
}

// bundle js
function bundle_js(bundler) {
    return bundler.bundle()
        .on('error', map_error)
        .pipe(source(config.outputFileScript))
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true}))
        // capture sourcemaps from transforms
        .pipe(ngAnnotate())
        // .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.outputDir))
}

// scripts
gulp.task('scripts', () => {
    let bundler = browserify(config.entryFileScript, {debug: true})
        .transform(babelify, {presets: ['es2015']});

    return bundle_js(bundler);
});

gulp.task('watch', () => {
    runSequence(
        'clean',
        ['styles', 'scripts'],
        () => {
            gulp.watch(config.scriptSources, event => {
                gutil.log(chalk.magenta('File ' + event.path + ' was ' + event.type));
                gulp.start('scripts');
            });
            gulp.watch(config.styleSources, event => {
                gutil.log(chalk.magenta('File ' + event.path + ' was ' + event.type));
                gulp.start('styles');
            });
        }
    );
});
