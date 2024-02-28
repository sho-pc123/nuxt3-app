<template>
  <div class="qiita-articles-container">
    <template v-for="article in data" :key="article.id">
      <article class="qiita-article qiita-article__container">
        <p class="qiita-article__Title">{{ article.title }}</p>
        <a :href="article.url">a</a>
      </article>
    </template>
    <hr>
  </div>
</template>

<script setup>
import { pageApiStore } from '@/store/page/qiita-articles/apiStore'

/** Page API Store */
const apiStore = pageApiStore()
apiStore.actionTitle()

/** Qiita 記事一覧データ */
const data = apiStore.articleTitle
console.log(data)
</script>

<style lang="scss" scoped>
  @use './stype.scss'
</style>