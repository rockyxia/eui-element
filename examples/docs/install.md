## 安装

### npm 安装

推荐使用 npm 的方式安装，它能更好地和 <a href="https://webpack.js.org/" target="_blank">webpack</a> 打包工具配合使用。

```shell
npm i eui-element -S
```

### CDN

目前可以通过 <a href="https://unpkg.com/eui-element/" target="_blank">unpkg.com/eui-element</a> 获取到最新版本的资源，在页面上引入 js 和 css 文件即可开始使用。

```html
<!-- 引入样式 -->
<link rel="stylesheet" href="https://unpkg.com/eui-element/lib/euiElement.css">
<!-- 引入组件库 -->
< script src="https://unpkg.com/eui-element/lib/euiElement.common.js"></script>
```

:::tip
我们建议使用 CDN 引入 eui-element 的用户在链接地址上锁定版本，以免将来 eui-element 升级时受到非兼容性更新的影响。锁定版本的方法请查看 <a href="https://unpkg.com" target="_blank">unpkg.com</a>。
:::

### Hello world

通过 CDN 的方式我们可以很容易地使用 eui-element 写出一个 Hello world 页面。<a href="https://jsfiddle.net/hzfpyvg6/14/" target="_blank">在线演示</a>

<iframe width="100%" height="600" src="//jsfiddle.net/hzfpyvg6/1213/embedded/html,result/" allowpaymentrequest allowfullscreen="allowfullscreen" frameborder="0"></iframe>

如果是通过 npm 安装，并希望配合 webpack 使用，请阅读下一节：[快速上手](/#/guide/quickstart)。
