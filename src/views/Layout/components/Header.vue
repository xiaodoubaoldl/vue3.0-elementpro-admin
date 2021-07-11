<template>
  <div class="header-wrap">
    <div class="header-left">
      <i :class="collapseClass" @click="handleCollapse"></i>
      管理系统
    </div>
    <div class="header-right">
      <el-avatar src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80"></el-avatar>
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          {{ userName }}<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item divided @click="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, computed } from 'vue';
import { useStore } from 'vuex';
import { removeToken } from '@/utils/auth';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    // 登录用户名
    const userName = computed(() => store.state.user.userName);
    // 退出登录
    const logout = () => {
      removeToken();
      router.push({ path: '/login' });
    };
    const state = reactive({
      count: 0,
    });
    const handleCollapse = () => {
      store.commit('handllCollapse', !store.state.collapse);
    };
    const collapseClass = computed(() => (store.state.collapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'));
    return {
      ...toRefs(state),
      handleCollapse,
      collapseClass,
      logout,
      userName,
    };
  },
};
</script>

<style lang="less" scoped>
  .header-wrap{
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
    color: #fff;
    .header-right{
      display: flex;
      align-items: center;
      .el-avatar{
        margin-right: 10px;
      }
      .el-dropdown-link{
        color: #fff;
        cursor: pointer;
      }
    }
  }
</style>
