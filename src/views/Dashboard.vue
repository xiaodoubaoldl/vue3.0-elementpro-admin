<template>
  <div class="home-wrap">
    <github-corner class="corner"/>
    <h1>首页</h1>
  </div>
</template>

<script>
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
    return {
      ...toRefs(state),
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
