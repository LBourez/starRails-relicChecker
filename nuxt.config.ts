// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt'
  ],

  imports: {
    dirs: ['./stores'],
  },

  pinia: {
    autoImports: ['defineStore', 'acceptHMRUpdate'],
  },
})
