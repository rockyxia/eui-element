<template>
  <el-row :tag="tag" :gutter="gutter" :type="type" :justify="justify" :align="align">
    <slot></slot>
  </el-row>
</template>

<script>
import Vue from 'vue'
import { 
  Row,
} from 'element-ui'

Vue.use(Row)

export default {
  name: 'EuiRow',

  props: {
    tag: {
      type: String,
      default: 'div'
    },
    gutter: Number,
    type: String,
    justify: {
      type: String,
      default: 'start'
    },
    align: {
      type: String,
      default: 'top'
    }
  },

  // computed: {
  //   style() {
  //     const ret = {};

  //     if (this.gutter) {
  //       ret.marginLeft = `-${this.gutter / 2}px`;
  //       ret.marginRight = ret.marginLeft;
  //     }

  //     return ret;
  //   }
  // },

  // render(h) {
  //   return h(this.tag, {
  //     class: [
  //       'el-row',
  //       this.justify !== 'start' ? `is-justify-${this.justify}` : '',
  //       this.align !== 'top' ? `is-align-${this.align}` : '',
  //       { 'el-row--flex': this.type === 'flex' }
  //     ],
  //     style: this.style
  //   }, this.$slots.default);
  // }
};
</script>