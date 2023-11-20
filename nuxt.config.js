import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
    app: {
        head: {
            htmlAttrs: { dir: 'ltr', lang: 'en' },
        },
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
    },

})
