## 快速上手

本节将介绍如何在项目中使用组件库。

### 引入 eui-element

你可以引入整个 eui-element，或是根据需要仅引入部分组件。我们先介绍如何引入完整的 eui-element。

#### 完整引入

在 main.js 中写入以下内容：

```javascript
import Vue from 'vue';
import EuiElement from 'eui-element'
import 'eui-element/lib/euiElement.css'
import App from './App.vue';

Vue.use(EuiElement);

new Vue({
  el: '#app',
  render: h => h(App)
});
```

注意：样式文件需要单独引入。


#### 按需引入

开发中...

<!-- 借助 [babel-plugin-component](https://github.com/QingWei-Li/babel-plugin-component)，我们可以只引入需要的组件，以达到减小项目体积的目的。

首先，安装 babel-plugin-component：

```bash
npm install babel-plugin-component -D
```

然后，将 .babelrc 修改为：

```json
{
  "presets": [["es2015", { "modules": false }]],
  "plugins": [
    [
      "component",
      {
        "libraryName": "jy-required-import",
        "styleLibraryName": "theme"
      }
    ]
  ]
}
```

接下来，如果你只希望引入部分组件，比如 只需要引入素材通用模块中的Content（latex转义html解析），那么需要在 main.js 中写入以下内容：

```javascript
import Vue from 'vue';
import { Input } from 'jy-required-import';
import App from './App.vue';

Vue.component(Input.name, Input);
/* 或写为
 * Vue.use(Input)
 */

new Vue({
  el: '#app',
  render: h => h(App)
});
``` -->
