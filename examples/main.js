import Vue from 'vue'
import App from './App.vue'
import euiElement from '../src/index'

Vue.use(euiElement)

Vue.config.productionTip = false

new Vue({
	render: h => h(App)
}).$mount('#app')
