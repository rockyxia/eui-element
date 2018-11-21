<template>
  <el-input :value="value" :size="size" :resize="resize" :form="form" :disabled="disabled" :readonly="readonly" :type="type" :autosize="autosize" :autocomplete="autocomplete" :validateEvent="validateEvent" :suffixIcon="suffixIcon" :prefixIcon="prefixIcon" :label="label" :clearable="clearable" :tabindex="tabindex"></el-input>
</template>

<script>
  import Vue from 'vue'
  import { 
    Input
  } from 'element-ui'

  Vue.use(Input)

  export default {
    name: 'EuiInput',

    props: {
      value: [String, Number],
      size: String,
      resize: String,
      form: String,
      disabled: Boolean,
      readonly: Boolean,
      type: {
        type: String,
        default: 'text'
      },
      autosize: {
        type: [Boolean, Object],
        default: false
      },
      autocomplete: {
        type: String,
        default: 'off'
      },
      /** @Deprecated in next major version */
      // autoComplete: {
      //   type: String,
      //   validator(val) {
      //     process.env.NODE_ENV !== 'production' &&
      //       console.warn('[Element Warn][Input]\'auto-complete\' property will be deprecated in next major version. please use \'autocomplete\' instead.');
      //     return true;
      //   }
      // },
      validateEvent: {
        type: Boolean,
        default: true
      },
      suffixIcon: String,
      prefixIcon: String,
      label: String,
      clearable: {
        type: Boolean,
        default: false
      },
      tabindex: String
    }
  }
</script>