#### npm init    (初始化webpack,一路回车，生成package.json)
#### cnpm install webpack --save-dev   (安装默认的webpack版本，并且写到package.json文件中)
#### cnpm install css-loader style-loader --save-dev  (安装css等loader,引入css等的时候要先用loader处理一下)


## 运行webpack进行打包
#### webpack hello.js hello.bundle.js   (使用webpack把hello.js打包成hello.bundle.js)
#### webpack   (默认使用的是webpack.config.js中的配置)
#### webpack --config webpack.dev.config.js  (使用webpack.dev.config.js配合文件进行打包)
#### npm run webpack  (也可以用npm run webpack执行在package.js中进行配置过的脚本)

#### cnpm install --save-dev babel-loader babel-core   （安装babel加载器）
#### cnpm install --save-dev babel-preset-latest  (安装babel最新版本)



