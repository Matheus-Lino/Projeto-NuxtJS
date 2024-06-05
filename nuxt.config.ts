// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      title: 'Nuxt Dojo',
      meta: [
        { name: 'description', content: 'Everthing about Nuxt 3'}
      ],
      link: [
        {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0'}
        // {rel: 'stylesheet', href: 'https://fonts.googleleapis.com/icon?family=Material+Icons'}
      ]
    }
  },
  runtimeConfig:{
    currencyKey: process.env.CURRENCY_API_KEY
  }
})
