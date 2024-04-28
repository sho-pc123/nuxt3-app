<template>
  <div class="qiita-articles">
    <article class="qiita-articles__item-list">
      <template v-for="article in data" :key="article.id">
        <div class="qiita-articles__item item">
          <div class="item__header">
            <NuxtImg class="header__image" :src="article.user.profile_image_url" />
            <div class="header__information-area">
              <p class="header__author-name">投稿者：{{ article.user.id }}</p>
              <p class="header__post-date">投稿日：{{ article.created_at.substr(0, 10) }}</p>
            </div>
          </div>
          <h2 class="item__title">{{ article.title }}</h2>
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