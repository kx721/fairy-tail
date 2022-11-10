<template>
  <van-cell center title="心动模式">
    <template #right-icon>
      <van-switch v-model="isMatchMode" size="24" />
    </template>
  </van-cell>
  <user-card-list></user-card-list>
  <user-card-list></user-card-list>
  <user-card-list></user-card-list>
</template>

<script lang="ts" setup>
import { ref, watchEffect } from "vue";
import UserCardList from "../components/UserCardList.vue";
import { UserType } from "../model/user";
const isMatchMode = ref<boolean>(false);
/**
 * 加载数据
 */
const loadData = async () => {};
</script>
<style scoped lang="scss"></style>
