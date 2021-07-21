<template>
  <div>
    <el-container>
      <el-header>
        <v-header/>
      </el-header>
      <el-container class="no-header-content">
        <el-aside>
          <v-sidebar/>
        </el-aside>
        <el-main>
          <v-app-main/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue';
import vHeader from './components/Header.vue';
import vSidebar from './components/Sidebar/index.vue';
import vAppMain from './components/AppMain.vue';

export default {
  components: {
    vHeader,
    vSidebar,
    vAppMain,
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
.el-header{
  background-color: #242f42;;
}
.no-header-content{
  .el-aside{
    height: calc(100vh - 60px);
    width: unset !important;
    background-color: rgb(50, 65, 87);
  }
  .el-main{
    height: calc(100vh - 60px);
    background-color: #f0f2f5;
  }
}
</style>
