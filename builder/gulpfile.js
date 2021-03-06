global.$ = require('./gulp.config');
/* console.log($); */

$.path.tasks.forEach(task => require(task)());

if ($.dev) $.gulp.series($.gulp.parallel('css', 'html', 'js', 'img', 'font', 'iconFont', "watch", 'server'))()
else{
    $.gulp.src($.path.serverDir, {read: false})
        .pipe($.GP.clean({force: true}))
        .pipe($.gulp.dest('../app/')
                .on('end', $.gulp.series($.gulp.parallel('css-prod', 'html', 'js-prod', 'img', 'font', 'iconFont'))))    

}