<template>
  <el-header :height="height">
    <slot></slot>
  </el-header>
</template>

<script>
  import Vue from 'vue'
  import { 
    Header
  } from 'element-ui'

  Vue.use(Header)

  export default {
    name: 'EuiHeader',
    
    props: {
      height: {
        type: String,
        default: '60px'
      }
    }
  }
</script>