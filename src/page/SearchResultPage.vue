<template>
  <van-card
    v-for="user in userList"
    :desc="user.profile"
    :title="`${user.username} (${user.planetCode})`"
    :thumb="user.avatarUrl"
  >
    <template #tags>
      <van-tag
        plain
        type="danger"
        v-for="tag in user.tags"
        style="margin-right: 8px; margin-top: 8px"
        >{{ tag }}</van-tag
      >
    </template>
    <template #footer>
      <van-button size="mini">联系我</van-button>
    </template>
  </van-card>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const { tags } = route.query;
const mockUser = {
  id: 1,
  username: "空相",
  userAccount: "4156321",
  avatarUrl:
    "https://i0.hdslb.com/bfs/face/ac47f17c50ec694baddf602bfe6994f9a41ee98e.jpg@240w_240h_1c_1s.webp",
  profile:
    "阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴",
  gender: 1,
  phone: "12345678904",
  email: "41352@qq.com",
  userStatus: 213,
  userRole: 123,
  planetCode: "123",
  tags: [
    "nodejs",
    "白兰中",
    "123",
    "nodejs",
    "白兰中",
    "白兰中",
    "白兰中",
    "白兰中",
  ],
  createTime: Date,
};
const userList = ref([mockUser]);
</script>
<style scoped></style>
