<template>
  <el-form :model="model" :rules="rules" :labelPosition="labelPosition" :labelWidth="labelWidth" :labelSuffix="labelSuffix" :inline="inline" :inlineMessage="inlineMessage" :statusIcon="statusIcon" :showMessage="showMessage" :size="size" :disabled="disabled" :validateOnRuleChange="validateOnRuleChange" :hideRequiredAsterisk="hideRequiredAsterisk">
    <slot></slot>
  </el-form>
</template>

<script>
  import Vue from 'vue'
  import { 
    Form
  } from 'element-ui'

  Vue.use(Form)

  export default {
    name: 'EuiForm',

    props: {
      model: Object,
      rules: Object,
      labelPosition: String,
      labelWidth: String,
      labelSuffix: {
        type: String,
        default: ''
      },
      inline: Boolean,
      inlineMessage: Boolean,
      statusIcon: Boolean,
      showMessage: {
        type: Boolean,
        default: true
      },
      size: String,
      disabled: Boolean,
      validateOnRuleChange: {
        type: Boolean,
        default: true
      },
      hideRequiredAsterisk: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

