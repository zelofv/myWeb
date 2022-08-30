const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false,

    devServer: {
        host: 'localhost',
        port: 8080,
        open: true,
        proxy: {
            '/login': {
                target: 'http://localhost:8082',
                changeOrigin: true,
            },
            '/register': {
                target: 'http://localhost:8082',
                changeOrigin: true,
            }
        }
    }
})
