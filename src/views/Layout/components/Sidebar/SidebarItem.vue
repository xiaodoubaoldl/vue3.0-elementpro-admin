<template>
  <!-- 没有meta或者meta.hidden==false默认显示 -->
  <div v-if="!item.meta||!item.meta.hidden">
    <template v-if="item.children">
      <!-- 一个child -->
      <template v-if="item.children.length==1&&!item.children[0].meta.hidden">
        <el-menu-item :index="`${basePath==='/'?'':basePath}/${item.children[0].path}`">
          <i :class="item.children[0].meta.icon||'el-icon-menu'"></i>
          <template #title>{{ item.children[0].meta.title }}</template>
        </el-menu-item>
      </template>
      <!-- 多个child -->
      <!-- <el-submenu v-else ref="subMenu" :index="resolvePath(item.path)" popper-append-to-body>
        <template slot="title">
          <item v-if="item.meta" :icon="item.meta && item.meta.icon" :title="item.meta.title" />
        </template>
        <sidebar-item
          v-for="child in item.children"
          :key="child.path"
          :is-nest="true"
          :item="child"
          :base-path="resolvePath(child.path)"
          class="nest-menu"
        />
      </el-submenu> -->
    </template>
    <!-- 没有child -->
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
