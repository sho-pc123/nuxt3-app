<template>
  <div>
      <ul>
        <li v-for="article in data" :key="article.id">
          <a :href="article.url">{{ article.title }}</a>
        </li>
      </ul>
    <hr>
    <NuxtLink to="/">Top Page</NuxtLink>
  </div>
</template>

<script setup>
import { pageApiStore } from '@/store/page/articles/apiStore'
// const { data } = await useFetch('https://qiita.com/api/v2/items?page=1&per_page=2', {
//   method: "GET",
//   headers: {
//     'Authorization': 'Bearer 2950aff10aaded5955af11c26017529143baff77'
//   }
// })
const apiStore = pageApiStore()
apiStore.actionTitle()
const data = apiStore.articleTitle
</script>