<template>
  <div class="qiita-articles-container">
    <template v-for="article in data" :key="article.id">
      <a :href="article.url">{{ article.title }}</a>
      <br />
    </template>
    <hr>
  </div>
</template>

<script setup>
import { pageApiStore } from '@/store/page/articles/apiStore'

const apiStore = pageApiStore()
apiStore.actionTitle()
const data = apiStore.articleTitle
</script>

<style lang="scss" scoped>
@use './stype.scss'
</style>