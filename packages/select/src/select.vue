<template>
  <el-select :name="name" :id="id" :value="value" :autocomplete="autocomplete" :automaticDropdown="automaticDropdown" :size="size" :disabled="disabled" :clearable="clearable" :filterable="filterable" :allowCreate="allowCreate" :loading="loading" :popperClass="popperClass" :remote="remote" :loadingText="loadingText" :noMatchText="noMatchText" :noDataText="noDataText" :remoteMethod="remoteMethod" :filterMethod="filterMethod" :multiple="multiple" :multipleLimit="multipleLimit" :placeholder="placeholder" :defaultFirstOption="defaultFirstOption" :reserveKeyword="reserveKeyword" :valueKey="valueKey" :collapseTags="collapseTags" :popperAppendToBody="popperAppendToBody">
    <slot></slot>
  </el-select>
</template>

<script>
  import Vue from 'vue'
  import { 
    Select
  } from 'element-ui'

  Vue.use(Select)

  export default {
    name: 'EuiSelect',

    props: {
      name: String,
      id: String,
      value: {
        required: true
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
      //       console.warn('[Element Warn][Select]\'auto-complete\' property will be deprecated in next major version. please use \'autocomplete\' instead.');
      //     return true;
      //   }
      // },
      automaticDropdown: Boolean,
      size: String,
      disabled: Boolean,
      clearable: Boolean,
      filterable: Boolean,
      allowCreate: Boolean,
      loading: Boolean,
      popperClass: String,
      remote: Boolean,
      loadingText: String,
      noMatchText: String,
      noDataText: String,
      remoteMethod: Function,
      filterMethod: Function,
      multiple: Boolean,
      multipleLimit: {
        type: Number,
        default: 0
      },
      placeholder: {
        type: String,
        default() {
          return "请选择";
        }
      },
      defaultFirstOption: Boolean,
      reserveKeyword: Boolean,
      valueKey: {
        type: String,
        default: 'value'
      },
      collapseTags: Boolean,
      popperAppendToBody: {
        type: Boolean,
        default: true
      }
    }
  }
</script>