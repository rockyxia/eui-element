<template>
  <el-table :data="data" :size="size" :width="width" :height="height" :maxHeight="maxHeight" :fit="fit" :stripe="stripe" :border="border" :rowKey="rowKey" :context="context" :showHeader="showHeader" :showSummary="showSummary" :sumText="sumText" :summaryMethod="summaryMethod" :rowClassName="rowClassName" :rowStyle="rowStyle" :cellClassName="cellClassName" :cellStyle="cellStyle" :headerRowClassName="headerRowClassName" :headerRowStyle="headerRowStyle" :headerCellClassName="headerCellClassName" :headerCellStyle="headerCellStyle" :highlightCurrentRow="highlightCurrentRow" :currentRowKey="currentRowKey" :emptyText="emptyText" :expandRowKeys="expandRowKeys" :defaultExpandAll="defaultExpandAll" :defaultSort="defaultSort" :tooltipEffect="tooltipEffect" :spanMethod="spanMethod" :selectOnIndeterminate="selectOnIndeterminate">
    <slot></slot>
  </el-table>
</template>

<script>
  import Vue from 'vue'
  import { 
    Table,
  } from 'element-ui'

  Vue.use(Table)

  export default {
    name: 'EuiTable',

    props: {
      data: {
        type: Array,
        default: function() {
          return [];
        }
      },
      size: String,
      width: [String, Number],
      height: [String, Number],
      maxHeight: [String, Number],
      fit: {
        type: Boolean,
        default: true
      },
      stripe: Boolean,
      border: Boolean,
      rowKey: [String, Function],
      context: {},
      showHeader: {
        type: Boolean,
        default: true
      },
      showSummary: Boolean,
      sumText: String,
      summaryMethod: Function,
      rowClassName: [String, Function],
      rowStyle: [Object, Function],
      cellClassName: [String, Function],
      cellStyle: [Object, Function],
      headerRowClassName: [String, Function],
      headerRowStyle: [Object, Function],
      headerCellClassName: [String, Function],
      headerCellStyle: [Object, Function],
      highlightCurrentRow: Boolean,
      currentRowKey: [String, Number],
      emptyText: String,
      expandRowKeys: Array,
      defaultExpandAll: Boolean,
      defaultSort: Object,
      tooltipEffect: String,
      spanMethod: Function,
      selectOnIndeterminate: {
        type: Boolean,
        default: true
      }
    }
  }
</script>