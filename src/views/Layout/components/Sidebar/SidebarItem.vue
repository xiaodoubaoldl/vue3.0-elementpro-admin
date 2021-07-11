<template>
  <div v-if="!item.meta||!item.meta.hidden">
    <template v-if="item.children">
      <!-- 一个child -->
      <template v-if="item.children.length==1">
        <el-menu-item :index="item.redirect">
          <i :class="item.children[0].meta.icon||'el-icon-menu'"></i>
        <template #title>{{ item.children[0].meta.title }}</template>
      </el-menu-item>
      </template>
    </template>
    <template v-else>
      <el-menu-item :index="item.path">
        <i class="el-icon-menu"></i>
        <template #title>{{ item.meta.title }}</template>
      </el-menu-item>
    </template>
  </div>
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
