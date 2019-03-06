var gulp = require('gulp'),
    runSequence = require('run-sequence'),
    ghpages = require('gulp-gh-pages');

gulp.task('deploy', function () {
    gulp.src(['dist/**/*', '!dist/robots.txt']).pipe(ghpages({
        branch: 'gh-pages',
        message: 'Update pages [timestamp]'
    }))
});