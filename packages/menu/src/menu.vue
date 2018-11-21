<template>
  <el-menu :mode="mode" :defaultActive="defaultActive" :defaultOpeneds="defaultOpeneds" :uniqueOpened="uniqueOpened" :router="router" :menuTrigger="menuTrigger" :collapse="collapse" :backgroundColor="backgroundColor" :textColor="textColor" :activeTextColor="activeTextColor" :collapseTransition="collapseTransition">
    <slot></slot>
  </el-menu>
</template>

<script type="text/jsx">
  import Vue from 'vue'
  import { 
    Menu
  } from 'element-ui'

  Vue.use(Menu)

  export default {
    name: 'EuiMenu',

    props: {
      mode: {
        type: String,
        default: 'vertical'
      },
      defaultActive: {
        type: String,
        default: ''
      },
      defaultOpeneds: Array,
      uniqueOpened: Boolean,
      router: Boolean,
      menuTrigger: {
        type: String,
        default: 'hover'
      },
      collapse: Boolean,
      backgroundColor: String,
      textColor: String,
      activeTextColor: String,
      collapseTransition: {
        type: Boolean,
        default: true
      }
    }
  }
</script>