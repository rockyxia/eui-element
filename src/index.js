import Dialog from '../packages/dialog'
import Button from '../packages/button'
import ButtonGroup from '../packages/button-group'

const components = [Dialog, Button, ButtonGroup]

const install = function(Vue, opts = {}) {
	components.forEach(component => {
		Vue.component(component.name, component)
	})

	Vue.prototype.$ELEMENT = {
		size: opts.size || '',
		zIndex: opts.zIndex || 2000
	}
}

if (typeof window !== 'undefined' && window.Vue) {
	install(window.Vue)
}

export default {
	version: '0.1.0',
	install,
	Dialog,
	Button,
	ButtonGroup
}
