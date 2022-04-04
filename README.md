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
|  ├─api  // 接口
|  |  ├─README.md
|  |  └common.js
├─public // 模版
|   └index.html
```


## Eslint Globals

https://www.emmanuelgautier.com/blog/eslint-global-variables


## 3. 使用组件库

[uView](https://www.uviewui.com/)

组件的搭建以及配置按需引入:

[uView config](https://juejin.cn/post/7030441663583485989)

## 4. 请求库

请求库使用 ``uni`` 自带的 [uni.request](https://uniapp.dcloud.io/api/request/request)。
## 5. 代码规范

[Git Commit message](https://gitee.com/help/articles/4231#article-header0)

## 6. 问题

* getImageInfo

> 本地路径必须放在 static 目录下

* 获取当前设置、以及打开设置

[小程序保存图片](https://daimajiaoliu.com/daima/4760eb9d7900405)

* uniapp 动态设置标题

```js
 uni.setNavigationBarTitle({ title: ''})
```

* uniapp px rpx 互相转换

```js
// rpx to px
var px = uni.upx2px(100)

// px to rpx
var rpx = 200 / (uni.upx2px(100) / 100);
```

* uniapp image 高度自适应

默认情况下，uniapp 中 image 元素默认有宽高的，如果想图片按照特定方式自适应的话，可以通过 image 标签提供的 mode。

* uniapp 设置背景色的两种方式

第一种是在 ``pages.json`` 配置文件中

```json
{
	"pages": {
		"path": "pages/inde/index",
		"style": {
			"backgroundColor": "#ddd"
		}
	}
}
```

另外一种是在对应的页面中添加如下样式
```css
page {
	background-color: #ddd;
}
```

* uniapp 中使用 canvas 实现图片分享

[image share](https://juejin.cn/post/7041087990222815246)


* node-sass 安装问题

[node-sass](https://zhuanlan.zhihu.com/p/479888799)

* node 版本

由于 node-sass 与 node 版本同步的，所以这个必须同步升级或同步降级。

[对应关系](https://www.npmjs.com/package/node-sass)



## ESLint alias

https://www.npmjs.com/package/eslint-import-resolver-webpack
https://stackoverflow.com/questions/47863102/eslint-error-showing-with-webpack-alias

## ESLint Global Variables

https://www.emmanuelgautier.com/blog/eslint-global-variables