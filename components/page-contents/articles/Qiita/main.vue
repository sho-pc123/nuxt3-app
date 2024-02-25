<template>
  <div class="qiita-articles-container">
    <template v-for="article in data" :key="article.id">
      <article class="qiita-article">
        <p class="qiita-article__Title">{{ article.title }}</p>
        <a :href="article.url">a</a>
      </article>
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