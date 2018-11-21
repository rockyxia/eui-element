<style>
  .demo-block .el-header, .demo-block .el-footer {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .demo-block .el-aside {
    color: #333;
  }
  
  .demo-container {
    .el-header, .el-footer {
      text-align: center;
    }
  
    .el-aside {
      background-color: #D3DCE6;
      text-align: center;
      line-height: 200px;
    }
  
    .el-main {
      background-color: #E9EEF3;
      color: #333;
      text-align: center;
      line-height: 160px;
    }
    
    .source > .el-container {
      margin-bottom: 40px;
    
      &:nth-child(5) .el-aside,
      &:nth-child(6) .el-aside {
        line-height: 260px;
      }

      &:nth-child(7) .el-aside {
        line-height: 320px;
      }
    }
  }
</style>

<script>
  export default {
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(20).fill(item)
      }
    }
  };
</script>

## Container 布局容器
用于布局的容器组件，方便快速搭建页面的基本结构：

`<eui-container>`：外层容器。当子元素中包含 `<eui-header>` 或 `<eui-footer>` 时，全部子元素会垂直上下排列，否则会水平左右排列。

`<eui-header>`：顶栏容器。

`<eui-aside>`：侧边栏容器。

`<eui-main>`：主要区域容器。

`<eui-footer>`：底栏容器。

:::tip
以上组件采用了 flex 布局，使用前请确定目标浏览器是否兼容。此外，`<eui-container>` 的子元素只能是后四者，后四者的父元素也只能是 `<eui-container>`。
:::

### 常见页面布局

:::demo
```html
<eui-container>
  <eui-header>Header</eui-header>
  <eui-main>Main</eui-main>
</eui-container>

<eui-container>
  <eui-header>Header</eui-header>
  <eui-main>Main</eui-main>
  <eui-footer>Footer</eui-footer>
</eui-container>

<eui-container>
  <eui-aside width="200px">Aside</eui-aside>
  <eui-main>Main</eui-main>
</eui-container>

<eui-container>
  <eui-header>Header</eui-header>
  <eui-container>
    <eui-aside width="200px">Aside</eui-aside>
    <eui-main>Main</eui-main>
  </eui-container>
</eui-container>

<eui-container>
  <eui-header>Header</eui-header>
  <eui-container>
    <eui-aside width="200px">Aside</eui-aside>
    <eui-container>
      <eui-main>Main</eui-main>
      <eui-footer>Footer</eui-footer>
    </eui-container>
  </eui-container>
</eui-container>

<eui-container>
  <eui-aside width="200px">Aside</eui-aside>
  <eui-container>
    <eui-header>Header</eui-header>
    <eui-main>Main</eui-main>
  </eui-container>
</eui-container>

<eui-container>
  <eui-aside width="200px">Aside</eui-aside>
  <eui-container>
    <eui-header>Header</eui-header>
    <eui-main>Main</eui-main>
    <eui-footer>Footer</eui-footer>
  </eui-container>
</eui-container>

<style>
  .demo-block .el-header, .demo-block .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .demo-block .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .demo-block .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  .source > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
```
:::

### 实例

开发中...

<!-- :::demo
```html
<eui-container style="height: 500px; border: 1px solid #eee">
  <eui-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <eui-menu :default-openeds="['1', '3']">
      <eui-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>导航一</template>
        <eui-menu-item-group>
          <template slot="title">分组一</template>
          <eui-menu-item index="1-1">选项1</eui-menu-item>
          <eui-menu-item index="1-2">选项2</eui-menu-item>
        </eui-menu-item-group>
        <eui-menu-item-group title="分组2">
          <eui-menu-item index="1-3">选项3</eui-menu-item>
        </eui-menu-item-group>
        <eui-submenu index="1-4">
          <template slot="title">选项4</template>
          <eui-menu-item index="1-4-1">选项4-1</eui-menu-item>
        </eui-submenu>
      </eui-submenu>
      <eui-submenu index="2">
        <template slot="title"><i class="el-icon-menu"></i>导航二</template>
        <eui-menu-item-group>
          <template slot="title">分组一</template>
          <eui-menu-item index="2-1">选项1</eui-menu-item>
          <eui-menu-item index="2-2">选项2</eui-menu-item>
        </eui-menu-item-group>
        <eui-menu-item-group title="分组2">
          <eui-menu-item index="2-3">选项3</eui-menu-item>
        </eui-menu-item-group>
        <eui-submenu index="2-4">
          <template slot="title">选项4</template>
          <eui-menu-item index="2-4-1">选项4-1</eui-menu-item>
        </eui-submenu>
      </eui-submenu>
      <eui-submenu index="3">
        <template slot="title"><i class="el-icon-setting"></i>导航三</template>
        <eui-menu-item-group>
          <template slot="title">分组一</template>
          <eui-menu-item index="3-1">选项1</eui-menu-item>
          <eui-menu-item index="3-2">选项2</eui-menu-item>
        </eui-menu-item-group>
        <eui-menu-item-group title="分组2">
          <eui-menu-item index="3-3">选项3</eui-menu-item>
        </eui-menu-item-group>
        <eui-submenu index="3-4">
          <template slot="title">选项4</template>
          <eui-menu-item index="3-4-1">选项4-1</eui-menu-item>
        </eui-submenu>
      </eui-submenu>
    </eui-menu>
  </eui-aside>
  
  <eui-container>
    <eui-header style="text-align: right; font-size: 12px">
      <eui-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <eui-dropdown-menu slot="dropdown">
          <eui-dropdown-item>查看</eui-dropdown-item>
          <eui-dropdown-item>新增</eui-dropdown-item>
          <eui-dropdown-item>删除</eui-dropdown-item>
        </eui-dropdown-menu>
      </eui-dropdown>
      <span>王小虎</span>
    </eui-header>
    
    <eui-main>
      <eui-table :data="tableData">
        <eui-table-column prop="date" labeui="日期" width="140">
        </eui-table-column>
        <eui-table-column prop="name" labeui="姓名" width="120">
        </eui-table-column>
        <eui-table-column prop="address" labeui="地址">
        </eui-table-column>
      </eui-table>
    </eui-main>
  </eui-container>
</eui-container>

<style>
  .demo-block .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .demo-block .el-aside {
    color: #333;
  }
</style>

<script>
  export default {
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(20).fill(item)
      }
    }
  };
</script>
```
::: -->

### Container Attributes
| 参数    | 说明     | 类型    | 可选值      | 默认值 |
|---------|----------|---------|-------------|--------|
| direction | 子元素的排列方向 | string | horizontal / vertical | 子元素中有 `eui-header` 或 `eui-footer` 时为 vertical，否则为 horizontal |

### Header Attributes
| 参数    | 说明     | 类型    | 可选值      | 默认值 |
|---------|----------|---------|-------------|--------|
| height | 顶栏高度 | string | — | 60px |

### Aside Attributes
| 参数    | 说明     | 类型    | 可选值      | 默认值 |
|---------|----------|---------|-------------|--------|
| width | 侧边栏宽度 | string | — | 300px |

### Footer Attributes
| 参数    | 说明     | 类型    | 可选值      | 默认值 |
|---------|----------|---------|-------------|--------|
| height | 底栏高度 | string | — | 60px |