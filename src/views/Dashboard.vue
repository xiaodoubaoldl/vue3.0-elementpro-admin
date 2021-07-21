<template>
  <div>
    <github-corner/>
    <h1>首页</h1>
  </div>
</template>

<script>
import GithubCorner from '@/components/GithubCorner.vue';
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

<style lang="scss" scoped>

</style>
