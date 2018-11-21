import Dialog from '../packages/dialog'
import Button from '../packages/button'
import ButtonGroup from '../packages/button-group'

import Table from '../packages/table'
import TableColumn from '../packages/table-column'

import Form from '../packages/form'
import FormItem from '../packages/form-item'
import Input from '../packages/input'
import Select from '../packages/select'
import Option from '../packages/option'
import Radio from '../packages/radio'
import RadioGroup from '../packages/radio-group'
import RadioButton from '../packages/radio-button'

import Menu from '../packages/menu'
import SubMenu from '../packages/submenu'
import MenuItem from '../packages/menu-item'
import MenuItemGroup from '../packages/menu-item-group'

import Container from '../packages/container'
import Aside from '../packages/aside'
import Main from '../packages/main'
import Footer from '../packages/footer'
import Header from '../packages/header'
import Row from '../packages/row'
import Col from '../packages/col'

import packageConfig from '../package.json'

const components = [Dialog, Button, ButtonGroup, Table, TableColumn, Form, FormItem, Input, Select, Option, Radio, RadioGroup, RadioButton, Menu, SubMenu, MenuItem, MenuItemGroup, Container, Aside, Main, Footer, Header, Row, Col]

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
	version: packageConfig.version,
	install,
	...components
}
