# eui-element

eui-element 是一个基于 element-ui 进行二次封装的组件库，主要为自己业务封装的一些组件和对 element-ui 进行新的主题定制。

每个人都可以以框架来定制自己的组件库。

## 安装

```
npm install eui-element -S
```

## 使用

在 main.js 文件中引入插件并注册

```
import Vue from 'vue'
import euiElement from 'eui-element'
import 'eui-element/lib/euiElement.css'

Vue.use(euiElement)
```

## 特点

1. 基于 element-ui 进行的二次封装，支持 element-ui 版本升级
2. 提供以 npm 的形式安装提供全局组件
3. 支持按需加载指定的组件（暂未实现）
4. 支持主题定制（暂未实现）
5. 支持md文档输出

## 浏览器兼容

与 element-ui 保持一致：现代浏览器和 IE10+

## 更新日志

### v0.1.2
2018-11-21：新增了md格式文档输出支持，已经对 安装、快速上手、布局、布局容器、按钮、导航菜单、对话框 等文档输出，相应的组件也继承过来了。部分组件还存在bug。

### v0.1.1
2018-11-16：使用方法增加css引入说明

### v0.1.0
2018-11-15：框架搭建，继承 button,button-group,dialog 三个组件
