<template>
  <el-submenu :index="index" :showTimeout="showTimeout" :hideTimeout="hideTimeout" :popperClass="popperClass" :disabled="disabled" :popperAppendToBody="popperAppendToBody">
    <slot slot="title" name="title"></slot>
    <slot></slot>
  </el-submenu>
</template>

<script type="text/jsx">
  import Vue from 'vue'
  import { 
    Submenu
  } from 'element-ui'

  Vue.use(Submenu)

  export default {
    name: 'EuiSubmenu',

    props: {
      index: {
        type: String,
        required: true
      },
      showTimeout: {
        type: Number,
        default: 300
      },
      hideTimeout: {
        type: Number,
        default: 300
      },
      popperClass: String,
      disabled: Boolean,
      popperAppendToBody: {
        type: Boolean,
        default: undefined
      }
    }
  }
</script>