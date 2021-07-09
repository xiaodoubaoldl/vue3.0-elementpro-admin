<template>
  <div class="sidebar">
    <el-menu
      default-active="2"
      class="sidebar-el-menu"
      background-color="#324157"
      text-color="#fff"
      active-text-color="#20a0ff"
      :collapse="isCollapse"
      router>
      <!-- 权限导航 -->
      <sidebar-item v-for="item in permissionRoutes" :key="item.index" :item="item"/>
    </el-menu>
  </div>
</template>

<script>
import { reactive, toRefs, computed } from 'vue';
import { useStore } from 'vuex';
import SidebarItem from './SidebarItem.vue';

export default {
  components: {
    SidebarItem,
  },
  setup() {
    const state = reactive({
      count: 0,
    });
    const store = useStore();
    const isCollapse = computed(() => store.state.collapse);
    return {
      ...toRefs(state),
      isCollapse,
    };
  },
};
</script>

<style lang="less" scoped>
.sidebar{
  .el-menu{
    border-right: none;
  }
  .sidebar-el-menu:not(.el-menu--collapse) {
    width: 250px;
  }
}
</style>
