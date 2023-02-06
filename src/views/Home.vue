<template>
  <div v-for="article in state.articleList" :key="article.id">
    {{article}}
  </div>
  <el-button @click="handleClick">增加</el-button>
  <div>
    {{ counter }}
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
import { articleService } from "@/config/api";
import { articleUrl } from "@/config/url";
// 定义一个状态对象
import { mainStore } from "@/store/index";
import { storeToRefs } from "pinia";

// 创建一个该组件的状态对象
const state = reactive<any>({
  articleList: [],
});
// 实例化一个状态对象
const store = mainStore();
// 解构并使数据具有响应式
const { counter } = storeToRefs(store);


function getArticle() {
  articleService.getArticle(articleUrl.getAllArticles, "").then((res: any) => {
    console.log(res);
    state.articleList = res.data;
  });
}
function handleClick() {
  counter.value++;
  store.updateCounter(counter.value);
}

getArticle();

</script>

<style scoped></style>
