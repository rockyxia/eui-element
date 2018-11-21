import Container from './src/container';

/* istanbul ignore next */
Container.install = function(Vue) {
  Vue.component(Container.name, Container);
};

export default Container;