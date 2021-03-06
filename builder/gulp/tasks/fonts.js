module.exports = () =>{
    $.gulp.task('font', () => {
        
        $.gulp.src($.path.src.font)
            .pipe($.GP.ttf2woff())
            .pipe($.gulp.dest($.path.prod.font));
            
        return $.gulp.src($.path.src.font)
                .pipe($.GP.ttf2woff2())
                .pipe($.gulp.dest($.path.prod.font))
                .on('end', $.bs.reload)
    }

        
        
    )
}
    