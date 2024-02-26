<template>
  <div class="layout-container">
    <Header />
    <div class="layout-container__content">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script lang="ts" setup>
import Header from '@/components/layout-contents/Header/main.vue'
import Footer from '@/components/layout-contents/Footer/main.vue'
</script>

<style lang="scss" scoped>
  @use './style.scss'
</style>