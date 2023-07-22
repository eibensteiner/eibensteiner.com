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
        '@nuxtjs/robots'
    ],
    plugins: [
        { src: '~/plugins/vercel.js', mode: 'client' },
        { src: '~/plugins/users.js', mode: 'client' },
        { src: '~/plugins/colors.js', mode: 'client' }
    ],
    image: {
        domains: ['s3.us-west-2.amazonaws.com'],
    }
})
