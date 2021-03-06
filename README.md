# 开课吧H5

> vue項目腳手架 (目前只支持IE9以上)

> 迭代1.0 花火(代号)

## 功能点

[✔️] 1.自动使用本地IP地址，方便发送给同网人员调试;

[✔️] 2.自动获取端口,默认8888,如果已被占用勿需手动改变会自动++;

[✔️] 3.使用normalize.css兼容所有浏览器初始化样式;

[✔️] 4.重写jq ajax 详见`src/common/README.md`;

[✔️] 5.本地mock数据以及远程代理并解决代理失败问题(远程代理可能会有问题后期具体解决);

[✘] 6.sass皮肤暂时未做后期加入;

## 代码风格

请参照 [https://github.com/huarxia/spec](https://github.com/huarxia/spec) （重要,请一定要仔细阅读）


## Build Setup

建议使用[cnpm](https://npm.taobao.org/)

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev / gulp

# build for production with minification
npm run build / gulp build

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test

# 集成gulp

# gulp集成后 本地开发运行命令：

gulp 或者 gulp server

# 打包压缩文件
`gulp build` 或者 `npm run build`

```

## 目录结构
```
lg-vue
   ├── .gitignore  // 忽略git提交文件
   ├── README.md  // 项目说明
   ├── .babelrc  // babel编译配置
   ├── .editorconfig // 编辑器规范配置
   ├── .eslintignore // eslint代码检查忽略文件配置
   ├── .eslintrc.js  // eslint代码检查配置
   ├── .postcssrc.js // postcss 配置，目前使用sass此项无用
   ├── package.json // 项目依赖配置
   ├── index.html  // 项目视图入口文件
   ├── LICENSE    // 许可证 MIT
   ├── dist      // `npm run build` 后生成的打包目录
   ├── gulpfile.js    // gulp任务以及配置
   ├── build    // 运行项目等配置
   ├── config  // 通用配置等
   ├── src
   ├── ├── app // 项目相关源码开发目录
   ├── |   |   └──style // 公共样式
   ├── |   ├── components // 公用组件
   ├── |   ├── pages // 具体页面目录
   ├── ├── assets // 静态公用资源
   ├── ├── common
   |   |   ├── ...
   │   ├── demo
   │   ├── router // 路由配置
   │   ├── app.vue // 视图入口
   │   ├── main.js // webpack入口
   │   └── mock
   │       ├──GET // 本地mock get
   │       └──POST // 本地mock post
   ├── static // 静态资源包括第三方库目录
   └── test // mocha等测试目录 暂时未做
   
```

## 使用第三方插件

1. [iconfont](http://fontawesome.dashgame.com/)

2. [mint-ui](http://mint-ui.github.io/#!/zh-cn)


For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 感谢这些开源项目

1. [vue](https://cn.vuejs.org/)
2. [sass](http://sass-lang.com/)
3. [http-proxy](https://github.com/nodejitsu/node-http-proxy)
4. [webpack](https://webpack.github.io/)