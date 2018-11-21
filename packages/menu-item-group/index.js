import MenuItemGroup from '../menu/src/menu-item-group';

/* istanbul ignore next */
MenuItemGroup.install = function(Vue) {
  Vue.component(MenuItemGroup.name, MenuItemGroup);
};

export default MenuItemGroup;