<template>
  <div>
    <h3>
      按钮demo，元素
      <code v-text="'<eui-button>'"></code>
    </h3>
    <div>
      <eui-button>默认按钮</eui-button>
      <eui-button type="primary">主要按钮</eui-button>
      <eui-button type="success">成功按钮</eui-button>
      <eui-button type="info">信息按钮</eui-button>
      <eui-button type="warning">警告按钮</eui-button>
      <eui-button type="danger">危险按钮</eui-button>
    </div>
    <div>
      <eui-button plain>朴素按钮</eui-button>
      <eui-button type="primary" plain>主要按钮</eui-button>
      <eui-button type="success" plain>成功按钮</eui-button>
      <eui-button type="info" plain>信息按钮</eui-button>
      <eui-button type="warning" plain>警告按钮</eui-button>
      <eui-button type="danger" plain>危险按钮</eui-button>
    </div>
    <div>
      <eui-button round>圆角按钮</eui-button>
      <eui-button type="primary" round>主要按钮</eui-button>
      <eui-button type="success" round>成功按钮</eui-button>
      <eui-button type="info" round>信息按钮</eui-button>
      <eui-button type="warning" round>警告按钮</eui-button>
      <eui-button type="danger" round>危险按钮</eui-button>
    </div>
    <div>
      <eui-button icon="el-icon-search" circle></eui-button>
      <eui-button type="primary" icon="el-icon-edit" circle></eui-button>
      <eui-button type="success" icon="el-icon-check" circle></eui-button>
      <eui-button type="info" icon="el-icon-message" circle></eui-button>
      <eui-button type="warning" icon="el-icon-star-off" circle></eui-button>
      <eui-button type="danger" icon="el-icon-delete" circle></eui-button>
    </div>
    <div>
      <eui-button disabled>默认按钮</eui-button>
      <eui-button type="primary" disabled>主要按钮</eui-button>
      <eui-button type="success" disabled>成功按钮</eui-button>
      <eui-button type="info" disabled>信息按钮</eui-button>
      <eui-button type="warning" disabled>警告按钮</eui-button>
      <eui-button type="danger" disabled>危险按钮</eui-button>
    </div>
    <div>
      <eui-button plain disabled>朴素按钮</eui-button>
      <eui-button type="primary" plain disabled>主要按钮</eui-button>
      <eui-button type="success" plain disabled>成功按钮</eui-button>
      <eui-button type="info" plain disabled>信息按钮</eui-button>
      <eui-button type="warning" plain disabled>警告按钮</eui-button>
      <eui-button type="danger" plain disabled>危险按钮</eui-button>
    </div>
    <div>
      <eui-button type="text">文字按钮</eui-button>
      <eui-button type="text" disabled>文字按钮</eui-button>
    </div>
    <div>
      <eui-button type="primary" icon="el-icon-edit">
      </eui-button>
      <eui-button type="primary" icon="el-icon-share">
      </eui-button>
      <eui-button type="primary" icon="el-icon-delete">
      </eui-button>
      <eui-button type="primary" icon="el-icon-search">搜索</eui-button>
      <eui-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></eui-button>
    </div>
    <div>
      <eui-button type="primary" :loading="true">加载中</eui-button>
    </div>
    <div>
      <eui-button>默认按钮</eui-button>
      <eui-button size="medium">中等按钮</eui-button>
      <eui-button size="small">小型按钮</eui-button>
      <eui-button size="mini">超小按钮</eui-button>
    </div>
    <div>
      <eui-button round>默认按钮</eui-button>
      <eui-button size="medium" round>中等按钮</eui-button>
      <eui-button size="small" round>小型按钮</eui-button>
      <eui-button size="mini" round @click="clickMe">超小按钮</eui-button>
    </div>
    <div>
      <eui-button-group>
        <eui-button type="primary" icon="el-icon-arrow-left">上一页</eui-button>
        <eui-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></eui-button>
      </eui-button-group>
      <eui-button-group style="margin-left:10px;">
        <eui-button type="primary" icon="el-icon-edit"></eui-button>
        <eui-button type="primary" icon="el-icon-share"></eui-button>
        <eui-button type="primary" icon="el-icon-delete"></eui-button>
      </eui-button-group>
    </div>
    <div></div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: 'DemoButton',
  props: {
  },
  methods: {
    clickMe: function() {
      // console.log('ssss');
      alert('sdfsdfss');
    }
  }
}
</script>

<style scoped>
</style>
