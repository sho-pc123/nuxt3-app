// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/image', "@nuxt/eslint"],
    eslint: {
    config: {
      stylistic: {
        indent: 2,
        quotes: 'single',
        semi: true,
      }
    }
  },
  css: [
    '@/asset/css/_root.scss'
  ],
  devtools: { enabled: true },
  ssr: true
})