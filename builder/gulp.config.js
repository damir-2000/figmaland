let srcDir =                `../app/#src`;
let distDir =               `../app/dist`;

module.exports = {
    gulp:                   require(`gulp`),
    GP:                     require(`gulp-load-plugins`)(),
    bs:                     require(`browser-sync`).create(),
    dev:                    process.argv.pop() === `dev`,
    path: {
        serverDir:          distDir,
        tasks:              require(`./gulp/config`),
        src: {
            html:           `${srcDir}/*.{html,pug,jade}`,
            css:            `${srcDir}/style/main.scss`,
            js:             `${srcDir}/script/*.js`,
            font:           `${srcDir}/fonts/**/*.ttf`,
            iconFont:       `${srcDir}/icons/**/*.*`,
            img:            `${srcDir}/images/**/*.{gif,jpg,jpeg,png,webp,jfif,tiff}`,
            
        },
        prod: {
            html:           `${distDir}/`,
            css:            `${distDir}/style/`,
            js:             `${distDir}/script/`,
            font:           `${distDir}/fonts/`,
            iconFont:       `${distDir}/icons/`,
            img:            `${distDir}/images/`,
            
        },
        watch: {
            html:           [`${srcDir}/*.{html,pug,jade}`, `${srcDir}/view/**/*.{html,pug,jade}`],
            css:            `${srcDir}/style/**/*.scss`,
            js:             `${srcDir}/script/**/*.js`,
            iconFont:       `${srcDir}/icons/*.*`,
            font:           `${srcDir}/fonts/**/*.*`,
            img:            `${srcDir}/images/**/*.*`,
            
        }
    } 
}