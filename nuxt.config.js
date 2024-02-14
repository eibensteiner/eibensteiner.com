import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: { dir: 'ltr', lang: 'en' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  css: ['@/assets/css/styles.css'],
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxt/content',
    '@nuxtjs/robots'
  ],
  image: {
    domains: ['s3.us-west-2.amazonaws.com'],
  }
})
