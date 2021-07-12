<template>
  <div class="sidebar">
    <el-menu
      :default-active="route.path"
      class="sidebar-el-menu"
      background-color="#324157"
      text-color="#fff"
      active-text-color="#20a0ff"
      :collapse="isCollapse"
      router>
      <!-- 权限导航 -->
      <sidebar-item v-for="item in permissionRoutes"
        :key="item.path"
        :item="item"
        :base-path="item.path"/>
    </el-menu>
  </div>
</template>

<script>
import { useRoute } from 'vue-router';
import { reactive, toRefs, computed } from 'vue';
import { useStore } from 'vuex';
import SidebarItem from './SidebarItem.vue';

export default {
  components: {
    SidebarItem,
  },
  setup() {
    const route = useRoute();
    const state = reactive({
      count: 0,
    });
    const store = useStore();
    const isCollapse = computed(() => store.state.collapse);
    const permissionRoutes = computed(() => store.state.permissionRoutes.routes);
    return {
      ...toRefs(state),
      isCollapse,
      permissionRoutes,
      route,
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
