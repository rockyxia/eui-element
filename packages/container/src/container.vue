<template>
  <el-container :direction="direction" :class="{ 'is-vertical': isVertical }">
    <slot></slot>
  </el-container>
</template>

<script>
import Vue from 'vue'
import { 
  Container,
} from 'element-ui'

Vue.use(Container)

export default {
  name: 'EuiContainer',
  props: {
    direction: String
  },
  computed: {
    isVertical() {
      if (this.direction === 'vertical') {
        return true;
      } else if (this.direction === 'horizontal') {
        return false;
      }
      return this.$slots && this.$slots.default
        ? this.$slots.default.some(vnode => {
          const tag = vnode.componentOptions && vnode.componentOptions.tag;
          return tag === 'eui-header' || tag === 'eui-footer';
        })
        : false;
    }
  }
};
</script>