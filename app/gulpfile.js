'use strict';

var gulp = require('gulp'),
    sketch = require('gulp-sketch'),
    consolidate = require('gulp-consolidate'),
    iconfont = require('gulp-iconfont'),
    argv = require('yargs').argv;

var sketchFile = '../tt-iconfont.sketch',
    svgFiles = '../svg/*.svg',
    templatesPath = './templates/',
    outputPath = '../output/',
    fontName = 'tt-icons';

gulp.task('iconfont', function(){

    function returnGlyphs(source) {
        if (source == 'svg') {
            return gulp.src(svgFiles)
        } else {
            return gulp.src(sketchFile)
                .pipe(sketch({
                    export: 'artboards',
                    formats: 'svg'
                }))
        }
    }

        returnGlyphs(argv.source)
        .pipe(iconfont({
            fontName: fontName,
            normalize: true,
            formats: ['ttf', 'eot', 'woff', 'woff2', 'svg'],
            timestamp: true,
            log: function(){}
        }))
        .on('glyphs', function(glyphs) {

            var options = {
                glyphs: glyphs,
                fontName: fontName,
                className: 's'
            };

            // generating the preview
            gulp.src(templatesPath + 'preview.html')
                .pipe(consolidate('lodash', options))
                .pipe(gulp.dest(outputPath));

            // generating the scss variables
            gulp.src(templatesPath + 'font_variables.scss')
                .pipe(consolidate('lodash', options))
                .pipe(gulp.dest(outputPath));

        })
        .pipe(gulp.dest(outputPath + fontName));

});