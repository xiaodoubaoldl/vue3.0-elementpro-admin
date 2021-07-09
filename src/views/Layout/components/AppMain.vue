<template>
  <div class="main-wrap">
    <!-- <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view> -->
    <router-view v-slot="{ Component }">
        <transition name="move" mode="out-in">
            <keep-alive :include="tagsList">
                <component :is="Component" />
            </keep-alive>
        </transition>
    </router-view>
  </div>
</template>

<script>
import { reactive, toRefs, computed } from 'vue';

export default {
  setup() {
    const state = reactive({
      count: 0,
    });
    const tagsList = computed(() => 'dashboard');
    return {
      ...toRefs(state),
      tagsList,
    };
  },
};
</script>

<style lang="less" scoped>
.main-app{
  // height: calc(100vh-60px);
}
</style>
