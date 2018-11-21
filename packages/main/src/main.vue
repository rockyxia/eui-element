<template>
  <el-main>
    <slot></slot>
  </el-main>
</template>

<script>
import Vue from 'vue'
import { 
  Main
} from 'element-ui'

Vue.use(Main)

export default {
  name: 'EuiMain',
}
</script>