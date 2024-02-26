const { defineConfig } = require('@vue/cli-service')

// if(window.location.hostname == 'formnj.github.io'){
//     var path = '/with/';
// } else {
//     var path = '/';
// }

module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave : false,
    outputDir: "/docs",
    publicPath: "/with/"
})
