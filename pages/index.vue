<template>
  <div>
    <ul>
      <li v-for="article in data" :key="article.id">
        {{ article.title }}
      </li>
    </ul>
    <hr>
    <NuxtLink to="/articles">Articles Page</NuxtLink>
  </div>
</template>

<script setup>
const { data } = await useFetch('https://qiita.com/api/v2/items?page=1&per_page=2', {
  method: "GET",
  headers: {
    'Authorization': 'Bearer 2950aff10aaded5955af11c26017529143baff77'
  }
})
</script>