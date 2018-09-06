const gulp = require('gulp');
const connect = require('gulp-connect'); // Runs a local dev server
const open = require('gulp-open'); // Open a URL in a web server
const browserify = require('browserify'); // Bundles JS
const reactify = require('reactify'); // Transforms React JSX to JS
const source = require('vinyl-source-stream'); // Use conventional text streams with Gulp
const concat = require('gulp-concat'); // Concatenates files

const config = {
  port: 9005,
  devBaseUrl: 'http://localhost',
  paths: {
    html: './src/*.html',
    js: './src/**/*.js',
    images: './src/images/*',
    css: [
      'node_modules/bootstrap/dist/css/bootstrap.min.css',
      'node_modules/bootstrap/dist/css/bootstrap-theme.min.css'
    ],
    dist: './dist',
    mainJs: './src/main.js'
  },
};

// Start a local development server
gulp.task('connect', () => {
  connect.server({
    root: ['dist'],
    port: config.port,
    base: config.devBaseUrl,
    livereload: true
  });
});

gulp.task('open', ['connect'], () => {
  gulp.src('dist/index.html')
    .pipe(open({ uri: `${config.devBaseUrl}:${config.port}/` }));
  // .pipe(open({ uri: config.devBaseUrl + ':' + config.port + '/'}));
});

gulp.task('html', () => {
  gulp.src(config.paths.html)
    .pipe(gulp.dest(config.paths.dist))
    .pipe(connect.reload());
});

gulp.task('js', () => {
  browserify(config.paths.mainJs)
    .transform(reactify)
    .bundle()
    .on('error', console.error.bind(console))
    .pipe(source('bundle.js'))
    .pipe(gulp.dest(`${config.paths.dist}/scripts`))
    .pipe(connect.reload());
});

gulp.task('css', () => {
  gulp.src(config.paths.css)
    .pipe(concat('bundle.css'))
    .pipe(gulp.dest(`${config.paths.dist}/css`));
});

gulp.task('images', () => {
  gulp.src(config.paths.images)
    .pipe(gulp.dest(`${config.paths.dist}/images`))
    .pipe(connect.reload());

  // publish favicon
  gulp.src('./src/favicon.ico')
    .pipe(gulp.dest(config.paths.dist));
});

gulp.task('watch', () => {
  gulp.watch(config.paths.html, ['html']);
  gulp.watch(config.paths.js, ['js']);
});

gulp.task('default', ['html', 'js', 'css', 'images', 'open', 'watch']);
module.exports = gulp;
