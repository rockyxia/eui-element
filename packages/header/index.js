import Header from './src/header';

/* istanbul ignore next */
Header.install = function(Vue) {
  Vue.component(Header.name, Header);
};

export default Header;