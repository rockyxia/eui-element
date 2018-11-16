<template>
  <el-button :size='size' :type='type' :plain='plain' :round='round' :circle='circle' :loading="loading" :disabled='disabled' :icon='icon' :autofocus='autofocus' :native-type='nativeType' @click="handleClick">
    <slot></slot>
  </el-button>
</template>

<script>
import Vue from 'vue'
import { 
  Button
} from 'element-ui'

Vue.use(Button)

export default {
  name: 'EuiButton',
  inject: {
    elForm: {
      default: ''
    },
    elFormItem: {
      default: ''
    }
  },
  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: String,
    icon: {
      type: String,
      default: ''
    },
    nativeType: {
      type: String,
      default: 'button'
    },
    loading: Boolean,
    disabled: Boolean,
    plain: Boolean,
    autofocus: Boolean,
    round: Boolean,
    circle: Boolean
  },
  computed: {
    _elFormItemSize() {
      return (this.elFormItem || {}).elFormItemSize;
    },
    buttonSize() {
      return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
    },
    buttonDisabled() {
      return this.disabled || (this.elForm || {}).disabled;
    }
  },
  methods: {
    handleClick(evt) {
      this.$emit('click', evt);
    }
  }
}
</script>

<style lang="css">
</style>