<template>
  <div class="qiita-articles">
      <article class="qiita-articles qiita-articles__container">
        <template v-for="article in data" :key="article.id">
          <p>投稿日{{ article.created_at }}</p>
          <p>投稿者{{ article.user.id }}</p>
          <NuxtImg :src="article.user.profile_image_url" ></NuxtImg>
          <p class="qiita-article__Title">{{ article.title }}</p>
          <a :href="article.url">a</a>
        </template>
      </article>
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
  @use './style.scss'
</style>