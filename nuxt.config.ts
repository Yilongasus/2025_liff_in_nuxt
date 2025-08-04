// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-05-15',
    devtools: { enabled: false },
    modules: ['@nuxt/ui', '@nuxtjs/sitemap', 'nuxt-gtag'],
    css: ['~/assets/css/main.css'],
    sitemap: {
        exclude: [
            '/signup',
        ],
        urls: [
            { loc: '/custom-page' }
        ],
        xsl: false
    },
    gtag: {
        id: 'G-EXLTSBN67H'
    }
})