<template>
  <div id="app">
    <img src="./assets/logo.png">

    <HelloWorld msg="这是eui-element一个简易的演示" />
    <div>

      <demo-button />
      <demo-dialog />

    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import DemoButton from './components/button.vue'
import DemoDialog from './components/dialog.vue'

export default {
  name: 'app',
  data() {
      return {
        dialogVisible: false
      };
    },
  components: {
    HelloWorld,
    DemoButton,
    DemoDialog
  }
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
