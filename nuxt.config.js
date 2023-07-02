import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
    app: {
        layoutTransition: { name: 'page', mode: 'out-in' },
    },
    css: ['@/assets/css/styles.css'],
    modules: ['@nuxtjs/tailwindcss', '@nuxt/image'],
    plugins: [{ src: '~/plugins/vercel.js', mode: 'client' }],
    image: {
        domains: ['s3.us-west-2.amazonaws.com']
    }
})
