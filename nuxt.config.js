module.exports = {
  head: {
    title: 'What is Directive (EU) 2016/2102?',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {name: 'msapplication-TileColor', content: '#1e3a72'},
      {name: 'theme-color', content: '#ffffff'},
      {hid: 'description', name: 'description', content: 'Info about Directive (EU) 2016/2102 of the European Parliament on the accessibility of the websites and mobile applications of public sector bodies.'},
      {name: 'title', content: 'What is Directive (EU) 2016/2102?'},
      {property: 'og:url', content: 'https://directive2102.eu'},
      {property: 'twitter:card', content: 'summary'},
      {property: 'twitter:title', content: 'What is Directive (EU) 2016/2102?'},
      {property: 'twitter:creator', content: '@_marcusherrmann'},
      {property: 'twitter:image', content: 'https://directive2102.eu/logo.png'},
      {property: 'twitter:url', content: 'https://directive2102.eu'},
      {property: 'og:image', content: 'https://directive2102.eu/logo.png'},
      {property: 'og:title', content: 'What is Directive (EU) 2016/2102?'},
      {property: 'og:description', name: 'twitter:description', content: 'Info about Directive (EU) 2016/2102 of the European Parliament on the accessibility of the websites and mobile applications of public sector bodies.'},
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {rel: 'apple-touch-icon',  sizes: '180x180', href: '/apple-touch-icon.png'},
      {rel: 'icon', type: 'image/x-icon', sizes: '16x16', href: '/favicon-16x16.png'},
      {rel: 'icon', type: 'image/x-icon', sizes: '32x32', href: '/favicon-32x32.png'},
      {rel: 'manifest',  href: '/site.webmanifest'},
      {rel: 'mask-icon',  href: '/safari-pinned-tab.svg', color: '#1e3a72'}
    ]
  },
  plugins: ['~/plugins/vue-smooth-scroll'],
  loading: false,
  build: {
    extend(config, {isDev, isClient}) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
};
