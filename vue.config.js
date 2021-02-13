module.exports = {
    publicPath: './',
    configureWebpack: {
        resolve: {
            // 別名配置
            alias: {
                components: '@/components',
            },
        },
    },
}
