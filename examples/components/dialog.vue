<template>
  <div>
    <h3>
      对话框demo，元素
      <code v-text="'<eui-dialog>'"></code>
    </h3>
    <div>
      <eui-button type="text" @click="dialogVisible  = true">点击打开 Dialog</eui-button>

      <eui-dialog title="提示" :visible.sync="dialogVisible" width="30%" :append-to-body="true" :before-close="handleClose">
        <span>这是一段信息</span>
        <span slot="title">提示提示提示提示</span>
        <span slot="footer" class="dialog-footer">
          <eui-button @click="dialogVisible = false">取 消</eui-button>
          <eui-button type="primary" @click="dialogVisible = false">确 定</eui-button>
        </span>
      </eui-dialog>
    </div>

    <div>
      <el-button type="text" @click="outerVisible = true">点击打开外层 Dialog</el-button>

      <eui-dialog title="外层 Dialog" :visible.sync="outerVisible">
        <eui-dialog width="30%" title="内层 Dialog" :visible.sync="innerVisible" append-to-body>
        </eui-dialog>
        <div slot="footer" class="dialog-footer">
          <eui-button @click="outerVisible = false">取 消</eui-button>
          <eui-button type="primary" @click="innerVisible = true">打开内层 Dialog</eui-button>
        </div>
      </eui-dialog>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DemoDialog',
  props: {
  },
  data() {
    return {
      dialogVisible: false,
      outerVisible: false,
      innerVisible: false
    };
  },
  methods: {
    handleClose(done) {
      alert('确认关闭？');
      // this.$confirm('确认关闭？').then(() => {
        done();
      // }).catch(() => {});
    }
  }
}
</script>

<style scoped>
.dialog-footer button:first-child {
	margin-right: 10px;
}
</style>

