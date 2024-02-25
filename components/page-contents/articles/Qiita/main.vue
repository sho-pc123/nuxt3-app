<template>
  <div>
    <ul>
      <li v-for="article in data" :key="article.id">
        <a :href="article.url">{{ article.title }}</a>
      </li>
    </ul>
    <hr>
  </div>
</template>

<script setup>
import { pageApiStore } from '@/store/page/articles/apiStore'

const apiStore = pageApiStore()
apiStore.actionTitle()
const data = apiStore.articleTitle
</script>