const { src, dest, series, parallel, watch } = require("gulp");
const babel = require("gulp-babel");
const browserSync = require("browser-sync").create();
const del = require("del");
const concat = require("gulp-concat");
const sass = require("gulp-sass")(require("sass"));

const input = "src";
const output = "build";

async function clean(cb) {
  await del(output);
  cb();
}

function html(cb) {
  src(`${input}/*.html`).pipe(dest(output));
  cb();
}
function css(cb) {
  src(`${input}/css/**/*.scss`)
    .pipe(sass().on("error", sass.logError))
    .pipe(concat("style.css"))
    .pipe(dest(output));
  cb();
}
function js(cb) {
  src(`${input}/*.js`)
    .pipe(babel({ presets: ["@babel/env"] }))
    .pipe(dest(output));
  cb();
}
function watcher(cb) {
  watch(`${input}/css/**/*.scss`).on("change", series(css, browserSync.reload));
  watch(`${input}/*.js`).on("change", series(js, browserSync.reload));
  watch(`${input}/*.html`).on("change", series(html, browserSync.reload));
  cb();
}
function server(cb) {
  browserSync.init({
    notify: false,
    open: false,
    server: {
      baseDir: output,
    },
  });
  cb();
}
exports.css = css;
exports.default = series(clean, parallel(html, css, js), server, watcher);
