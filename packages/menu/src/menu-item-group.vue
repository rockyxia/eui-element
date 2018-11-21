<template>
  <el-menu-item-group :title="title">
    <slot slot="title" name="title"></slot>
    <slot></slot>
  </el-menu-item-group>
</template>

<script type="text/jsx">
  import Vue from 'vue'
  import { 
    MenuItemGroup
  } from 'element-ui'

  Vue.use(MenuItemGroup)

  export default {
    name: 'EuiMenuItemGroup',

    props: {
      title: {
        type: String
      }
    }
  }
</script>