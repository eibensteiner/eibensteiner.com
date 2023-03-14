import { defineNuxtConfig } from 'nuxt/config'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    app: {
        layoutTransition: { name: 'page', mode: 'out-in' },
    },
    css: ['@/assets/css/styles.css'],
    modules: ['@nuxtjs/tailwindcss'],
})
