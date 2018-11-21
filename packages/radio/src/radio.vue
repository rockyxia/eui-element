<template>
  <el-radio :value="value" :label="label" :disabled="disabled" :name="name" :border="border" :size="size">
    <slot></slot>
  </el-radio>
</template>

<script>
  import Vue from 'vue'
  import { 
    Radio
  } from 'element-ui'

  Vue.use(Radio)

  export default {
    name: 'EuiRadio',

    props: {
      value: {},
      label: {},
      disabled: Boolean,
      name: String,
      border: Boolean,
      size: String
    }
  }
</script>