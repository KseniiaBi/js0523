const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass')); // npm install sass gulp-sass --save-dev
const uglify = require('gulp-uglify');//npm install --save-dev gulp-uglify
const clean = require('gulp-dest-clean'); // npm install --save-dev gulp-dest-clean
const imagemin = require('gulp-imagemin'); // npm install --save-dev gulp-imagemin 
const htmlmin = require('gulp-html-minifier-terser'); // npm install --save gulp-html-minifier-terser
const critical = require('critical');

gulp.task('critical', function (cb) {
  critical.generate({
      inline: true,
      base: './',
      src: './build/index.html',
      dest: './build/index.html',
      minify: true,
      ignore: {
        atrule: ['@font-face'],
        rule: [/some-regexp/],
    },
  }); 
  cb();
});


gulp.task('htmlmin', () => {
  return gulp.src('./*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('build/'));
});

function compressImages(cb){
  return gulp.src('./images/*')
		.pipe(imagemin([
      imagemin.gifsicle({interlaced: true}),
      imagemin.mozjpeg({quality: 75, progressive: true}),
      imagemin.optipng({optimizationLevel: 5}),
      imagemin.svgo({
        plugins: [
          {removeViewBox: true},
          {cleanupIDs: false}
        ]
      })
    ]))
		.pipe(gulp.dest('build/images'));
    cb();
}

gulp.task('compress', function (cb) {
  return gulp.src('./js/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('build/js'));
  cb();
});

function buildStyles() {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass.sync({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./build/css/'));
};

function moveFontStyles(cb){
  return gulp.src('./sass/fonts.css')
    .pipe(gulp.dest('./build/css/'));
    cb();
}

function cleanDist(cb){
  return gulp.src('./')
    .pipe(clean('./build'));
    cb();
}

function moveFonts(cb){
  return gulp.src('./fonts/*')
        .pipe(gulp.dest('./build/fonts'));
    cb();
}
function movePostScript(cb){
  return gulp.src('./mail.php')
        .pipe(gulp.dest('./build/'));
    cb();
}

exports.default = gulp.series(cleanDist, 'htmlmin', 'compress', moveFontStyles, buildStyles, moveFonts, movePostScript, 'critical', compressImages  ); //



// sass to css minify +
// *** critical css + 
// js minify +
// image minify + 
// html minify +
// ****** webp images
// create build/ folder +
// ******* browsersync