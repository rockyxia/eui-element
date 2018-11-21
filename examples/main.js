import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import euiElement from '../src/index'

Vue.use(euiElement)

Vue.config.productionTip = false

// 引入demo-block
import DemoBlock from './components/demoBlock'
Vue.component('demo-block', DemoBlock)

// 引入项目样式入口
import './assets/scss/index.scss'

/* 引入代码高亮样式 */
import 'highlight.js/styles/color-brewer.css';

// 引入路由
import routes from './route'
Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
