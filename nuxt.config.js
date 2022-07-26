export default {

  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  router: {
    base: '/figure-stage/'
  },

  server: {
    port: 7777, // default: 3000
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'figure-stage',
    meta: [],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: 'https://code.jquery.com/jquery-3.6.0.min.js', body: true },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.0/TweenMax.min.js', body: true },
      { src: 'script/elastic-progress.min.js', body: true },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/sass/global.sass'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/pwa-update.js' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // image: {
  //   domains: ['https://jasonxddd.me:9000']
  // },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxt-hero-icons/outline/nuxt',
    '@nuxt-hero-icons/solid/nuxt',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/firebase'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  firebase: {
    config: {
      apiKey: process.env.FIREBASE_APIKEY,
      authDomain: process.env.FIREBASE_AUTHDOMAIN,
      projectId: process.env.FIREBASE_PROJECTID,
      storageBucket: process.env.FIREBASE_STORAGEBUCKET,
      messagingSenderId: process.env.FIREBASE_MESSAGINGSENDERID,
      appId: process.env.FIREBASE_APPID,
      measurementId: process.env.FIREBASE_MEASUREMENTID
    },
    services: {
      firestore: true,
      storage: true
    }
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    icon: {
      source: 'icon.png',
    },

    meta: {
      viewport: `width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, shrink-to-fit=no, minimal-ui`,
      mobileApp: true,
      mobileAppIOS: true,
      appleStatusBarStyle: 'default',
      name: '展示舞台 FigureStage',
      author: 'JasonXDDD',
      description: `360 rotate picture & display platform`,
      theme_color: '#e5e5e5',
      background_color: '#e5e5e5',
      lang: 'zh-TW',
      ogHost: 'https://jasonxddd.github.io/figure-stage',
      nativeUI: true,
    },

    manifest: {
      name: '展示舞台 FigureStage',
      short_name: 'FigureStage',
      display: 'standalone',
      start_url: 'https://jasonxddd.github.io/figure-stage/?standalone=true',
      description: `360 rotate picture & display platform`,
      background_color: '#e5e5e5',
      lang: 'zh-TW',
      orientation: 'portrait',
      // useWebmanifestExtension: true,
    },

    workbox: {
      offlineAnalytics: true,
      offline: true,
      offlineStrategy: 'StaleWhileRevalidate',
      skipWaiting: true,
      runtimeCaching: [
        {
          urlPattern: 'https://jasonxddd.github.io/figure-stage/.*',
          handler: 'StaleWhileRevalidate',
          method: 'GET',
          strategyOptions: {
            cacheName: 'bottleNekoCache',
            cacheableResponse: { statuses: [0, 200] },
          },
        },
        {
          urlPattern: 'https://fonts.googleapis.com/.*',
          handler: 'StaleWhileRevalidate',
          method: 'GET',
          strategyOptions: {
            cacheName: 'fontCache',
            cacheableResponse: { statuses: [0, 200] },
          },
        },
        {
          urlPattern: 'https://jasonxddd.me:9000/.*',
          handler: 'StaleWhileRevalidate',
          method: 'GET',
          strategyOptions: {
            cacheName: 'myImageCache',
            cacheableResponse: { statuses: [0, 200] },
          },
        },
        {
          urlPattern: 'https://jasonxddd.me:81/.*',
          handler: 'StaleWhileRevalidate',
          method: 'GET',
          strategyOptions: {
            cacheName: 'cardImageCache',
            cacheableResponse: { statuses: [0, 200] },
          },
        },
      ],
    },
  },

  build: {
    cache: false,
    filenames: {
      chunk: ({ isDev }) => (isDev ? '[name].js' : '[id].[contenthash].js'),
    },
    extractCSS: process.env.NODE_ENV === 'production',
    optimization: {
      minimize: process.env.NODE_ENV === 'production',
      splitChunks: {
        chunks: 'all',
        minSize: 10000,
        maxSize: 250000,
        automaticNameDelimiter: '.',
        name: undefined,
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.(css|vue)$/,
            chunks: 'all',
            enforce: true,
          },
        },
      },
    },
    extend(config, { isDev, isClient }) {
      config.module.rules.push({
        test: /\.worker\.(c|m)?js$/i,
        exclude: /(node_modules)/,
        use: [
          {
            loader: 'worker-loader',
            options: {
              filename: '[name].[contenthash].worker.js',
              chunkFilename: '[id].[contenthash].worker.js',
            },
          },
        ],
      })
    },
  },
}
