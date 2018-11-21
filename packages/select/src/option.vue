<template>
  <el-option :label="label" :value="value" :created="created" :disabled="disabled">
    <!-- <slot></slot> -->
  </el-option>
</template>

<script>
  import Vue from 'vue'
  import { 
    Option
  } from 'element-ui'

  Vue.use(Option)

  export default {
    name: 'EuiOption',

    props: {
      value: {
        required: true
      },
      label: [String, Number],
      created: Boolean,
      disabled: {
        type: Boolean,
        default: false
      }
    },
  }
</script>