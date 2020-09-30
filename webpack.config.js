const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');  // node 内置核心模块, 用来处理路径问题
const webpack = require("webpack")
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    // 入口文件
    entry: './src/index.js',
    // 输出配置
    output: { 
        // 输出文件名
        filename: './built.js', 
        // 输出文件路径配置
        // __dirname nodejs 的变量，代表当前文件的目录绝对路径
        path: path.resolve(__dirname, 'bist')
    },

    // loader配置
    module:{
        rules: [
            // 详细 loader 配置
            // 不同文件必须配置不同 loader 处理 
            {
                // 匹配js文件
                test: /\.js$/,
                // 使用哪些 loader 进行处理
                use: 'babel-loader',
            }, 
            {
                // 匹配css文件
                test: /\.css$/,
                // 使用哪些 loader 进行处理
                use: [
                // use 数组中 loader 执行顺序：从右到左，从下到上 依次执行
                // 创建 style 标签，将 js 中的样式资源插入进行，添加到 head 中生效
                MiniCssExtractPlugin.loader,
                // 将 css 文件变成 commonjs 模块加载 js 中，里面内容是样式字符串
                'css-loader',
                {
                 loader:"px2rem-loader",
                 options:{
                    remUni:58,
                    remPrecision:8
                }
            }
                ]
            },
            {
                // url-loader：处理图片资源，问题：默认处理不了html中的img图片
                test: /\.(jpg|png|gif)$/,
                // 需要下载 url-loader file-loader
                loader: 'url-loader',
                options: {
                // 图片大小小于8kb，就会被base64处理，优点：减少请求数量（减轻服务器压力），缺点：图片体积会更大（文件请求速度更慢）
                // base64在客户端本地解码所以会减少服务器压力，如果图片过大还采用base64编码会导致cpu调用率上升，网页加载时变卡
                limit: 8 * 1024,
                // 给图片重命名，[hash:10]：取图片的hash的前10位，[ext]：取文件原来扩展名
                name: '[hash:10].[ext]',
                // 问题：因为url-loader默认使用es6模块化解析，而html-loader引入图片是conmonjs，解析时会出问题：[object Module]
                // 解决：关闭url-loader的es6模块化，使用commonjs解析
                esModule: false,
                outputPath: 'imgs',
                },
            },
            {
                test: /\.html$/,
                // 处理html文件的img图片（负责引入img，从而能被url-loader进行处理）
                loader: 'html-loader',
            },
            // 打包其他资源(除了html/js/css资源以外的资源)
            {
                // 排除html|js|css|less|jpg|png|gif文件
                exclude: /\.(html|js|css|less|jpg|png|gif)/,
                // file-loader：处理其他文件
                loader: 'file-loader',
                options: {
                name: '[hash:10].[ext]',
                outputPath: 'media',
                },
            },
            

        ]
    },
    
    // plugins 的配置
    plugins:[
        // html-webpack-plugin：默认会创建一个空的html文件，自动引入打包输出的所有资源（JS/CSS）
        // 需要有结构的HTML文件可以加一个template
        new HtmlWebpackPlugin({
            // 复制这个./src/index.html文件，并自动引入打包输出的所有资源（JS/CSS）
            template: './src/index.html',
        }),
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin()
    ],

    // 模式
    mode: 'development', // 开发模式
    
    // 开发服务器 devServer：用来自动化，不用每次修改后都重新输入webpack打包一遍（自动编译，自动打开浏览器，自动刷新浏览器）
    // 特点：只会在内存中编译打包，不会有任何输出（不会像之前那样在外面看到打包输出的build包，而是在内存中，关闭后会自动删除）
    // 启动devServer指令为：npx webpack-dev-server
    devServer: {
        // 启动gzip压缩
        compress: true,
        // 端口号
        port: 3000,
        // 自动打开浏览器
        open: true,
    },

};