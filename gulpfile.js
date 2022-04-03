let project_folder = "dist";
let source_folder = "src";

let path = {
    build: {
        html: project_folder + "/",
        css: project_folder + "/css/",
        js: project_folder + "/source/js/",
        fonts: project_folder + "/fonts/",
        img: project_folder + "/img/",
        video: project_folder + "/video/",
        libs: project_folder + "/libs/",
    },
    src: {
        html: [source_folder + "/*.html", "!" + source_folder + "/_*.html"],
        css: source_folder + "/source/scss/style.scss",
        js: source_folder + "/source/js/script.js",
        fonts: source_folder + "/fonts/*.ttf",
        img: source_folder + "/img/**/*.{jpg,png,svg,gif,ico,webp}",
        video: source_folder + "/video/**/*.mp4",
        libs: source_folder + "/libs/**/*.{css,scss,gif,rb,js,eot,svg,ttf,woff}",
    },
    watch: {
        html: source_folder + "/**/*.html",
        css: source_folder + "/source/scss/**/*.scss",
        js: source_folder + "/source/js/**/*.js",
        img: source_folder + "/img/**/*.{jpg, png, svg, gif, ico, webp}",
        video: source_folder + "/video/**/*.mp4",
        libs: source_folder + "/libs/**/*.{css, scss, gif, rb, js, eot, svg, ttf, woff}",
    },
    clean: "./" + project_folder + "/"
}

let {src, dest} = require('gulp'),
gulp = require('gulp'),   
browsersync = require("browser-sync").create(),
fileinclude = require("gulp-file-include"),
del = require("del"),
scss = require("gulp-sass"),
autoprefixer = require("gulp-autoprefixer"),
group_media = require("gulp-group-css-media-queries"),
gulp_clean_css = require('gulp-clean-css'),
rename = require("gulp-rename"),
uglify = require("gulp-uglify-es").default,
imagemin = require("gulp-imagemin");


function browserSync(param){
    browsersync.init({
        server: {
            baseDir: "./" + project_folder + "/"
        },
        port: 3000,
        notify: false
    })
}

function html(params) {
    return src(path.src.html)
    .pipe(fileinclude())
    .pipe(dest(path.build.html))
    .pipe(browsersync.stream())
}

function videos(params) {
    return src(path.src.video)
    .pipe(dest(path.build.video))
    .pipe(browsersync.stream())
}

function libs(params) {
    return src(path.src.libs)
    .pipe(dest(path.build.libs))
    .pipe(browsersync.stream())
}

function images(params) {
    return src(path.src.img)
    .pipe(imagemin({
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
        interlaced: true,
        optimizationLevel: 3
    }))
    .pipe(dest(path.build.img))
    .pipe(browsersync.stream())
}

function js(params) {
    return src(path.src.js)
    .pipe(fileinclude())
    .pipe(dest(path.build.js))
    .pipe(
        uglify()
    )
    .pipe(rename({
        extname: ".min.js"
    }))
    .pipe(dest(path.build.js))
    .pipe(browsersync.stream())
}

function css(params) {
    return src(path.src.css)
    .pipe(
        scss({
            outputStyle: "expanded"
        })
    )
    .pipe(
        group_media()
    )
    .pipe(
        autoprefixer({overrideBrowserslist: ['last 5 versions'], cascade: true})
    )
    .pipe(dest(path.build.css))
    .pipe(
        gulp_clean_css()
    )
    .pipe(rename({
        extname: ".min.css"
    }))
    .pipe(dest(path.build.css))
    .pipe(browsersync.stream())
}

function watchFiles(params) {
    gulp.watch([path.watch.html], html);
    gulp.watch([path.watch.css], css);
    gulp.watch([path.watch.js], js);
    gulp.watch([path.watch.img], images);
}

function clean(params) {
    return del(path.clean);
}

let build = gulp.series(clean, gulp.parallel(js, css, html, images, videos, libs));
let watch = gulp.parallel(build, watchFiles, browserSync);

exports.images = images;
exports.videos = videos;
exports.libs = libs;
exports.js = js;
exports.css = css;
exports.html = html;
exports.build = build;
exports.watch = watch;
exports.default = watch;