export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: ['@pinia/nuxt'],

  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      title: 'oroConstructions',
      meta: [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        }
      ]
    }
  },

  runtimeConfig: {
    public: {
      BASE_URL: process.env.API_URL ?? 'http://localhost:3000/',
    },
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
