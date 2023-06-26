import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
    app: {
        layoutTransition: { name: 'page', mode: 'out-in' },
    },
    css: ['@/assets/css/styles.css'],
    modules: ['@nuxtjs/tailwindcss'],
})
