const gulp = require('gulp');
const rename = require('gulp-rename');
const sass = require('gulp-sass');

function convert(done) {
    gulp.src('./src/assets/style/scss/style.scss')
        .pipe(sass({
            errorLogToConsole: true,
            outputStyle: 'compressed'
        }))
        .on('error', console.error.bind(console))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist/assets/style/'));
    done();
    gulp.src('./src/index.html')
      .pipe(gulp.dest('./dist/'));
    gulp.src('./src/assets/images/**/*')
      .pipe(gulp.dest('./dist/assets/images/'));
    gulp.src('./src/assets/fonts/**/*')
      .pipe(gulp.dest('./dist/assets/fonts/'));
    done();
}


function watchSass() {
  gulp.watch("./src/assets/style/scss/**/*", convert);
  gulp.watch("./src/index.html", convert);
}

gulp.task(watchSass);
