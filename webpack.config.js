var htmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');


module.exports = {
    // context: __dirname,
    // 两个文件打包到一起
    // entry: ['./src/script/main.js', './src/script/a.js'],
    // output: {
    //     path: __dirname+'/dist/js',
    //     filename: 'bundle.js'
    // },
    // 两个文件分别打包
    // entry: {
    //     a: './src/script/a.js',
    //     main: './src/script/main.js'
    // },
    entry: './src/app.js',

    output: {
        path: __dirname+'/dist',        //生成到该目录下
        filename: 'js/[name].bundle.js',
        // publicPath: 'https://cdn.com/'    //引入到html中的时候加上这个前缀（比如当js文件是放在cdn上时就很有用）
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',                   //把es6的语法转换成浏览器能识别的
                // exclude: __dirname+'/node_modules/',
                // include: __dirname+'/src/',
                exclude: path.resolve(__dirname, 'node_modules'),  //排除掉不需要用babel的目录
                include: path.resolve(__dirname, 'src'),   //使用babel只对该目录下处理（加快打包时间）
                options: {                     //在package.js中加入"babel": {"presets": ["lastest"]},之后，这里就不需要引入了，可以注释掉了
                    presets: ['latest']
                }
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
            },
            {
                test: /\.ejs$/,
                loader: 'ejs-loader',
            },
            {
                test: /\.css$/,
                loaders: [
                    'style-loader',
                    'css-loader?importLoader=1',
                ]
            },
            {
                test: /\.less$/,
                loaders: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif|svg)$/i,
                loader: 'url-loader',
                // loader: 'file-loader',
                // loader: 'image-webpack-loader',   //可以压缩
                options: {
                    name: 'assets/[name]-[hash:5].[ext]',
                    limit: 10240,
                }
            }
        ]
    },
    plugins: [
        /*new htmlWebpackPlugin({
            filename: 'index.html',   //打包生成的文件名，不指定就是源html文件名
            template: 'index.html',   //使用index.html作为模板，使用插件去生成(生成的前缀目录是output下的path)
            inject: 'head',   //指定生成的标签嵌入在html的哪个位置, false表示不自动注入
            title: 'webpack is good',   //这个参数可以在生成的html文件中使用生成  <%= htmlWebpackPlugin.options.title %>
            date: new Date(),           //这个参数可以在生成的html文件中使用生成  <%= htmlWebpackPlugin.options.date %>
            // minify: {                   //对生成的html文件进行压缩
            //     removeComments: true,    //压缩的html中去掉注释
            //     collapseWhitespace: true  //去掉空格
            // },
            chunks: ['main'],    //有两个js文件可以引入，如果只需要main分块
        }),*/
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: 'body'
        })
    ],
}