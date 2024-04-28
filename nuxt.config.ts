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
  devtools: { enabled: true },
  ssr: true
})