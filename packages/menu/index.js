import Menu from './src/menu';

/* istanbul ignore next */
Menu.install = function(Vue) {
  Vue.component(Menu.name, Menu);
};

export default Menu;