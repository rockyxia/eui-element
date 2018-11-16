<template>
  <el-dialog :visible.sync="visibleStatus" :title="title" :width="width" :center="center" :fullscreen="fullscreen" :top="top" :modal="modal" :modal-append-to-body="modalAppendToBody" :append-to-body="appendToBody" :lock-scroll="lockScroll" :custom-class="customClass" :close-on-click-modal="closeOnClickModal" :close-on-press-escape="closeOnPressEscape" :show-close="showClose" :before-close="beforeClose" @close="euiClose" @open="euiOpen" @closed="euiClosed" @opened="euiOpened">
    <slot slot="title" name="title"></slot>
    <slot></slot>
    <slot slot="footer" name="footer">
    </slot>
  </el-dialog>
</template>

<script>
import Vue from 'vue'
import { 
  Button, 
  Dialog 
} from 'element-ui'

Vue.use(Button)
Vue.use(Dialog)

export default {
  name: 'EuiDialog',
  props: {
    title: {
      type: String,
      default: ''
    },
    modal: {
      type: Boolean,
      default: true
    },
    modalAppendToBody: {
      type: Boolean,
      default: true
    },
    appendToBody: {
      type: Boolean,
      default: false
    },
    lockScroll: {
      type: Boolean,
      default: true
    },
    closeOnClickModal: {
      type: Boolean,
      default: true
    },
    closeOnPressEscape: {
      type: Boolean,
      default: true
    },
    showClose: {
      type: Boolean,
      default: true
    },
    width: String,
    fullscreen: Boolean,
    customClass: {
      type: String,
      default: ''
    },
    top: {
      type: String,
      default: '15vh'
    },
    beforeClose: Function,
    center: {
      type: Boolean,
      default: false
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      visibleStatus: this.visible
    };
  },
  watch: {
    visible (val) {
      this.visibleStatus = val
    }
  },
  methods: {
    euiClose () {
      this.$emit('update:visible', false);
    },
    euiClosed () {
    },
    euiOpen () {
    },
    euiOpened () {
    }
  }
}
</script>

<style lang="css">
</style>

