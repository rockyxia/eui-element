<template>
  <el-aside :width="width">
    <slot></slot>
  </el-aside>
</template>

<script>
  import Vue from 'vue'
  import { 
    Aside
  } from 'element-ui'

  Vue.use(Aside)

  export default {
    name: 'EuiAside',
    props: {
      width: {
        type: String,
        default: '300px'
      }
    }
  }
</script>