const { defineConfig } = require('@vue/cli-service')

// if(window.location.hostname == 'formnj.github.io'){
//     var path = '/with/';
// } else {
//     var path = '/';
// }

module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave : false,
    publicPath: "/with/",
    outputDir: "/docs",
    css : {
        loaderOptions: {
            sass: {
                additionalData: `
                @import "@/assets/scss/_common.scss";
            `
            }
        }
    }
})
