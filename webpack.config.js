const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const webpack = require("webpack")

const glob = require("glob")

const setMPA = () => {
    const entry = {};
    const htmlWebpackPlugins = [];
    const entryFiles = glob.sync(path.join(__dirname,'./src/*/index.js'))

    Object.keys(entryFiles).map((index) => {
        const entryFile = entryFiles[index];
        const match = entryFile.match(/src\/(.*)\/index\.js/);
        const pageName = match && match[1]; //短路运算，判断match是否有效，有效再取分组1
        entry[pageName] = entryFile;
        htmlWebpackPlugins.push(
            new HtmlWebpackPlugin({
                template:path.join(__dirname,`src/${pageName}/index.html`),
                filename:`${pageName}.html`,
                chunks:['vendors',pageName],
                inject:true,
                minify:{
                    html5:true,
                    collapseWhitespace:true,
                    preserveLineBreaks:false,
                    minifyCSS:true,
                    minifyJS:true,
                    removeComments:false
                }
            })
        )
    })
    console.log("entryFiles",entryFiles) // 可以打印出来index.js的绝对路径
    return {
        entry,
        htmlWebpackPlugins
    }
}

const { entry,htmlWebpackPlugins } = setMPA()


module.exports = {
    //入口文件
    entry: entry,
    //输出配置
    output: {
        // 输出文件名
        filename: './[name]_built.js',
        // 输出文件路径配置
        path: path.resolve(__dirname, 'dist')
    },
    // loader配置
    module: {
        rules: [
            {
                // 匹配js文件
                test: /\.js$/,
                use: 'babel-loader',
            }, 
            {
                // 匹配css文件
                test: /\.css$/,
                use: [
                'style-loader',
                'css-loader'
                ]
            },
            {
                test: /\.(jpg|png|gif)$/,
                loader: 'url-loader',
                options: {
                limit: 8 * 1024,
                name: '[hash:10].[ext]',
                esModule: false,
                outputPath: 'images',
                },
            },
            {
                test: /\.html$/,
                // 处理html文件的img图片（负责引入img，从而能被url-loader进行处理）
                loader: 'html-loader',
            },
            
        ]
    },
    // plugins配置
    plugins:[
        new webpack.HotModuleReplacementPlugin()
    ].concat(htmlWebpackPlugins),
    //模式
    mode: 'none', //开发模式
    // 开发服务器 devServer：用来自动化，不用每次修改后都重新输入webpack打包一遍（自动编译，自动打开浏览器，自动刷新浏览器）
    // 启动devServer指令为：npm webpack-dev-server
    devServer: {
        host:"127.0.0.1",
        port: "8080",
        open: true,
    },
}