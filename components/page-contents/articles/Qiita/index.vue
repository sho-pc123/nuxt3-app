<template>
  <div class="qiita-articles">
    <article class="qiita-articles__item-list">
      <template v-for="article in data" :key="article.id">
        <div class="qiita-articles__item item">
          <p>投稿日{{ article.created_at }}</p>
          <div class="item__author-information">
            <p>投稿者{{ article.user.id }}</p>
            <NuxtImg class="item__image" :src="article.user.profile_image_url" />
          </div>
          <p class="qiita-article__Title">{{ article.title }}</p>
          <a :href="article.url">a</a>
        </div>
      </template>
    </article>
    <hr>
  </div>
</template>

<script setup>
import { pageApiStore } from '@/store/page/qiita-articles/apiStore'

/** Page API Store */
const apiStore = pageApiStore()
apiStore.fetchArticles()

/** Qiita 記事一覧データ */
const data = apiStore.articles
</script>

<style lang="scss" scoped>
  @use './style.scss'
</style>