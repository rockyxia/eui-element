<template>
  <div style="height:100%">
    <eui-container style="height:100%">
      <eui-header height="40">
        <header-model></header-model>
      </eui-header>
      <eui-container>
        <eui-aside width="200px">
          <menu-model></menu-model>
        </eui-aside>
        <eui-main class="markdown-content">
          <router-view></router-view>
        </eui-main>
      </eui-container>
    </eui-container>
  </div>
</template>

<script>
  import HeaderModel from './components/header'
  import MenuModel from './components/menu'

  export default {
    name: 'app',
    data() {
      return {
        // dialogVisible: false
      };
    },
    components: {
      HeaderModel,
      MenuModel
    }
  }
</script>

<style>
</style>

