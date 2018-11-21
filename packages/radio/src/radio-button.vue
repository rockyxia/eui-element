<template>
  <el-radio-button :label="label" :disabled="disabled" :name="name">
    <slot></slot>
  </el-radio-button>
</template>

<script>
  import Vue from 'vue'
  import { 
    RadioButton
  } from 'element-ui'

  Vue.use(RadioButton)

  export default {
    name: 'EuiRadioButton',

    props: {
      label: {},
      disabled: Boolean,
      name: String
    }
  }
</script>