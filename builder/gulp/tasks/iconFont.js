module.exports = () =>{
    $.gulp.task('iconFont', () => {
        
        $.gulp.src($.path.src.iconFont)
            .pipe($.gulp.dest($.path.prod.iconFont))
            .on('end', $.bs.reload)
    }
        
    )
}
    