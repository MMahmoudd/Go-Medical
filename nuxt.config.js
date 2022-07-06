export default {
    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'Go Medical',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Welcome in Go Medical Plus' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            { rel: 'icon', type: 'image/png', href: '/icon.png' },
            { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.9.0/css/all.css' },
            { href: 'https://fonts.googleapis.com', rel: 'preconnect' },
            { href: 'https://fonts.gstatic.com', rel: 'preconnect' },
            { href: 'https://fonts.googleapis.com/css2?family=Tajawal&display=swap', rel: 'stylesheet' }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '@/assets/style/main.scss',
        'swiper/dist/css/swiper.css'
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        { src: '~/plugins/swiper', ssr: false },
        { src: '~/plugins/scroll', ssr: false }
    ],
    router: {
        prefetchPayloads: false,
    },
    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/bootstrap
        'bootstrap-vue/nuxt',
        '@nuxtjs/pwa'
    ],
    pwa: {
        meta: {
            title: 'Go Medical',
            author: 'Go Plus',
        },
        manifest: {
            name: 'Go Medical',
            short_name: "Go Medical",
            description: 'Welcome in Go Medical Plus',
            lang: 'en',
            display: "standalone",
            start_url: "/?standalone=true"
        },
        icon: {
            source: "./static/icon.png",
        },
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {}
}