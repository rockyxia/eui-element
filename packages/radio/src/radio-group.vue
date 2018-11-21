<template>
  <el-radio-group :value="value" :disabled="disabled" :size="size" :textColor="textColor" :fill="fill">
    <slot></slot>
  </el-radio-group>
</template>

<script>
  import Vue from 'vue'
  import { 
    RadioGroup
  } from 'element-ui'

  Vue.use(RadioGroup)

  export default {
    name: 'EuiRadioGroup',

    props: {
      value: {},
      size: String,
      fill: String,
      textColor: String,
      disabled: Boolean
    }
  }
</script>