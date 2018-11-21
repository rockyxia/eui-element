<template>
  <el-footer :height="height">
    <slot></slot>
  </el-footer>
</template>

<script>
import Vue from 'vue'
import { 
  Footer
} from 'element-ui'

Vue.use(Footer)

export default {
  name: 'EuiFooter',
  props: {
    height: {
      type: String,
      default: '60px'
    }
  }
}
</script>