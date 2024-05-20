// https://v3.nuxtjs.org/api/configuration/nuxt.config
 export default defineNuxtConfig({
   modules: ['@nuxtjs/tailwindcss', '@kevinmarrec/nuxt-pwa',  ['@pinia/nuxt',{
    autoImports: [
      'defineStore', 
      ['defineStore', 'definePiniaStore'],
   ],
  },
 
  ]],
      css: [
        '@/assets/css/style.css',
      ],
      pwa: {
        manifest: {
          name:"Street Poet",
          short_name:"street_poet",
          lang: 'fr',
          description:'Lisez des histoires et écrivez la votre dans un lieu public.'
        }
      },
      app: {
        head: {
          charset: 'utf-8',
          title: 'Street Poet',
          meta: [
            { name: 'description', content: 'Lisez des histoires et écrivez la votre dans un lieu public.' }
          ],
        }
      }
})


