<template>
  <el-button-group>
    <slot></slot>
  </el-button-group>
</template>
<script>
  import Vue from 'vue'
  import { 
    ButtonGroup
  } from 'element-ui'

  Vue.use(ButtonGroup)

  export default {
    name: 'EuiButtonGroup'
  };
</script>