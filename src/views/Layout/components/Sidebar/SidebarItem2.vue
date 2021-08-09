<template>
    <el-submenu index="1">
      <template #title>
        <i class="el-icon-location"></i>
        <span>导航</span>
      </template>
      <el-menu-item-group>
        <template #title>分组一</template>
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="分组2">
        <el-menu-item index="1-3">选项3</el-menu-item>
      </el-menu-item-group>
      <el-submenu index="1-4">
        <template #title>选项4</template>
        <el-menu-item index="1-4-1">选项1</el-menu-item>
      </el-submenu>
    </el-submenu>
  <!-- <div>
  </div> -->
</template>

<script>
import { reactive, toRefs } from 'vue';

export default {
  name: 'SidebarItem',
  props: {
    item: {
      type: Object,
      default: () => {},
    },
    basePath: {
      type: String,
      default: '',
    },
  },
  setup() {
    const state = reactive({
      count: 0,
    });

    return {
      ...toRefs(state),
    };
  },
};
</script>

<style lang="less" scoped>

</style>
