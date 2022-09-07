<template>
  <van-nav-bar
    title="标题"
    left-arrow
    @click-left="onClickLeft"
    @click-right="onClickRight"
  >
    <template #right>
      <van-icon name="search" size="18" />
    </template>
  </van-nav-bar>
  <div id="content">
    <router-view />
  </div>
  <van-tabbar route>
    <van-tabbar-item replace to="/" icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item replace to="/team" icon="search">队伍</van-tabbar-item>
    <van-tabbar-item replace to="/user" icon="friends-o">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Toast } from "vant";
import { useRouter } from "vue-router";
const router = useRouter();
const onClickLeft = () => {
  router.push("/");
};
const onClickRight = () => {
  router.push("/search");
};
</script>
<style scoped></style>
