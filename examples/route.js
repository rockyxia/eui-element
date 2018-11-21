import Install from './docs/install.md'
import QuickStart from './docs/quickstart.md'

import Layout from './docs/layout.md'
import Container from './docs/container.md'
import Button from './docs/button.md'

import Menu from './docs/menu.md'

import Dialog from './docs/dialog.md'


const routes = [
  {
    path: '/',
    component: Install,
    name: 'default'
  },
  {
    path: '/guide/install',
    name: 'Install',
    component: Install
  },
  {
    path: '/guide/quickstart',
    name: 'QuickStart',
    component: QuickStart
  },
  {
    path: '/component/layout',
    name: 'Layout',
    component: Layout
  },
  {
    path: '/component/container',
    name: 'Container',
    component: Container
  },
  {
    path: '/component/button',
    name: 'Button',
    component: Button
  },
  {
    path: '/component/menu',
    name: 'Menu',
    component: Menu
  },
  {
    path: '/component/dialog',
    name: 'Dialog',
    component: Dialog
  }
]

export default routes
