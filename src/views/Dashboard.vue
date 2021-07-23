<template>
  <div class="home-wrap">
    <github-corner class="corner"/>
    <el-button @click="set">set</el-button>
    <el-button @click="get">get</el-button>
  </div>
</template>

<script>
import { getToken, setToken } from '@/utils/auth';
import GithubCorner from '@/components/GithubCorner/index.vue';
import { reactive, toRefs } from 'vue';

export default {
  components: {
    GithubCorner,
  },
  setup() {
    const state = reactive({
      count: 0,
    });
    const set = () => {
      setToken('test', '123');
    };
    const get = () => {
      console.log(getToken('test'));
    };
    return {
      ...toRefs(state),
      set,
      get,
    };
  },
};
</script>

<style lang="less" scoped>
  .home-wrap{
    position: relative;
    .corner {
      position: absolute;
      top: 0px;
      right: 0px;
    }
  }
</style>
