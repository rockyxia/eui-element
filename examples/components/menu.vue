<template lang="html">
  <div class="menu-model">
    <eui-menu
      :default-openeds="['1', '2']"
      :default-active="defaultActive"
      :router="true"
    >
      <eui-submenu index="1">
        <template slot="title">
          <span>开发指南</span>
        </template>
        <eui-menu-item index="/guide/install">安装</eui-menu-item>
        <eui-menu-item index="/guide/quickstart">快速上手</eui-menu-item>
      </eui-submenu>
      <eui-submenu index="2">
        <template slot="title">
          <span>组件</span>
        </template>
        <eui-menu-item-group>
          <template slot="title">Basic</template>
          <eui-menu-item index="/component/layout">Layout 布局</eui-menu-item>
          <eui-menu-item index="/component/container">Container 布局容器</eui-menu-item>
          <eui-menu-item index="/component/button">Button 按钮</eui-menu-item>
        </eui-menu-item-group>
        <eui-menu-item-group>
          <template slot="title">Navigation</template>
          <eui-menu-item index="/component/menu">NavMenu 导航菜单</eui-menu-item>
        </eui-menu-item-group>
        <eui-menu-item-group>
          <template slot="title">Others</template>
          <eui-menu-item index="/component/dialog">Dialog 对话框</eui-menu-item>
        </eui-menu-item-group>
      </eui-submenu>
    </eui-menu>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        defaultActive: '/guide/install'
      }
    },
    created () {
      const path = this.$route.fullPath
      this.defaultActive = path == '/' ? '/guide/install' : path
    },
    methods: {
    }
  }
</script>

<style lang="css">
</style>
