<template>
  <el-table-column :type="type" :label="label" :className="className" :labelClassName="labelClassName" :property="property" :prop="prop" :width="width" :minWidth="minWidth" :renderHeader="renderHeader" :sortable="sortable" :sortMethod="sortMethod" :sortBy="sortBy" :resizable="resizable" :context="context" :columnKey="columnKey" :align="align" :headerAlign="headerAlign" :showTooltipWhenOverflow="showTooltipWhenOverflow" :showOverflowTooltip="showOverflowTooltip" :fixed="fixed" :formatter="formatter" :selectable="selectable" :reserveSelection="reserveSelection" :filterMethod="filterMethod" :filteredValue="filteredValue" :filters="filters" :filterPlacement="filterPlacement" :filterMultiple="filterMultiple" :index="index" :sortOrders="sortOrders">
    <slot></slot>
  </el-table-column>
</template>

<script>
  import Vue from 'vue'
  import { 
    TableColumn,
  } from 'element-ui'

  Vue.use(TableColumn)

  export default {
    name: 'EuiTableColumn',

    props: {
      type: {
        type: String,
        default: 'default'
      },
      label: String,
      className: String,
      labelClassName: String,
      property: String,
      prop: String,
      width: {},
      minWidth: {},
      renderHeader: Function,
      sortable: {
        type: [String, Boolean],
        default: false
      },
      sortMethod: Function,
      sortBy: [String, Function, Array],
      resizable: {
        type: Boolean,
        default: true
      },
      context: {},
      columnKey: String,
      align: String,
      headerAlign: String,
      showTooltipWhenOverflow: Boolean,
      showOverflowTooltip: Boolean,
      fixed: [Boolean, String],
      formatter: Function,
      selectable: Function,
      reserveSelection: Boolean,
      filterMethod: Function,
      filteredValue: Array,
      filters: Array,
      filterPlacement: String,
      filterMultiple: {
        type: Boolean,
        default: true
      },
      index: [Number, Function],
      sortOrders: {
        type: Array,
        default() {
          return ['ascending', 'descending', null];
        },
        validator(val) {
          return val.every(order => ['ascending', 'descending', null].indexOf(order) > -1);
        }
      }
    }
  }

</script>