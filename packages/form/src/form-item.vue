<template>
  <el-form-item :label="label" :labelWidth="labelWidth" :prop="prop" :required="required" :rules="rules" :error="error" :validateStatus="validateStatus" :inlineMessage="inlineMessage" :showMessage="showMessage" :size="size">
    <slot></slot>
  </el-form-item>
</template>

<script>
  import Vue from 'vue'
  import { 
    FormItem
  } from 'element-ui'

  Vue.use(FormItem)

  export default {
    name: 'EuiFormItem',

    props: {
      label: String,
      labelWidth: String,
      prop: String,
      required: {
        type: Boolean,
        default: undefined
      },
      rules: [Object, Array],
      error: String,
      validateStatus: String,
      for: String, // 未向下传递
      inlineMessage: {
        type: [String, Boolean],
        default: ''
      },
      showMessage: {
        type: Boolean,
        default: true
      },
      size: String
    }
  }
</script>

