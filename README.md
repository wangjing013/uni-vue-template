# 开发前必看

## 前提条件

> nodejs 版本必须为 14.*, 主要是匹配 node-sass 版本。
## 1. 起步

### 安装依赖
```
npm install
```

### 启动应用
```
npm run serve
```

### 打包构建
```
npm run build
```

### 自定义打包配置

See [Configuration Reference](https://cli.vuejs.org/config/).


## 2. 项目结构

```
├─src
|  ├─App.vue // 应用文件
|  ├─main.js // 执行入口
|  ├─manifest.json // 应用配置文件(eg: 应用图标、小程序 appid 、各类小程序特定配置等等)
|  ├─pages.json // 配置页面路由
|  ├─uni.scss // 默认样式
|  ├─utils 	// 工具类
|  |   ├─config.js
|  |   ├─regex.js
|  |   └request.js
|  ├─style	// 工具样式类
|  |   ├─README.md
|  |   └flex.scss
|  ├─static	 // 静态资源
|  |   └logo.png
|  ├─plugins // 自定义插件
|  |    ├─errorCatch.js
|  |    ├─index.js
|  |    └interact.js
|  ├─pages // 页面文件
|  |   ├─index
|  |   |   └index.vue
|  |   ├─course
|  |   |   └course.vue
|  ├─store  // 接口
|  |  ├─modules
|  |  └index.js
|  ├─api  // 接口
|  |  ├─README.md
|  |  └common.js
├─public // 模版
|   └index.html
```

## 3. 使用组件库

[uView](https://www.uviewui.com/)

组件的搭建以及配置按需引入:

[uView config](https://juejin.cn/post/7030441663583485989)

## 4. 请求库

请求库使用 ``uni`` 自带的 [uni.request](https://uniapp.dcloud.io/api/request/request)。

## 5. Git 代码规范

[Git Commit message](https://gitee.com/help/articles/4231#article-header0)