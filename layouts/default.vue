<template>
  <div class="layout-container">
    <Header class="layout-container__header" />
    <div class="layout-container__content">
      <slot />
    </div>
    <Footer class="layout-container__footer" />
  </div>
</template>

<script lang="ts" setup>
import Header from '@/components/layout-contents/Header/index.vue'
import Footer from '@/components/layout-contents/Footer/index.vue'
</script>

<style lang="scss" scoped>
  @use './style.scss'
</style>