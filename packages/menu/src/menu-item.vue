<template>
  <el-menu-item :index="index" :route="route" :disabled="disabled">
    <slot></slot>
    <slot slot="title" name="title"></slot>
  </el-menu-item>
</template>

<script type="text/jsx">
  import Vue from 'vue'
  import { 
    MenuItem
  } from 'element-ui'

  Vue.use(MenuItem)

  export default {
    name: 'EuiMenuItem',

    props: {
      index: {
        type: String,
        required: true
      },
      route: [String, Object],
      disabled: Boolean
    }
  }
</script>