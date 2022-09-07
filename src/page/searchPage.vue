<template>
  <form action="/">
    <van-search
      v-model="value"
      show-action
      placeholder="请输入搜索关键词"
      @search="onSearch"
      @cancel="onCancel"
    />
  </form>
  <van-tag :show="show" closeable size="medium" type="primary" @close="close">
    标签
  </van-tag>
</template>

<script setup>
import { ref } from "vue";
import { Toast } from "vant";

const value = ref("");
const onSearch = (val) => Toast(val);
const onCancel = () => Toast("取消");
</script>
<style scoped></style>
