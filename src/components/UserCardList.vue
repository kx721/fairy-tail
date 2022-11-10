<template>
  <van-card
    desc="123456"
    title="名字"
    thumb="https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg"
  >
    <template #tags>
      <van-tag plain type="danger">javascript</van-tag>
      <van-tag plain type="danger">vue</van-tag>
      <van-tag plain type="danger">前端</van-tag>
    </template>
    <template #footer>
      <van-button size="mini">联系我</van-button>
    </template>
  </van-card>
</template>

<script setup lang="ts">
import { UserType } from "../model/user";
interface UserCardListProps {
  userList: UserType[];
}
const props = withDefaults(defineProps<UserCardListProps>(), {
  userList: [] as UserType[],
});
</script>
<style scoped></style>
