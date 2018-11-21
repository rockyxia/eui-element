import FormItem from '../form/src/form-item';

/* istanbul ignore next */
FormItem.install = function(Vue) {
  Vue.component(FormItem.name, FormItem);
};

export default FormItem;