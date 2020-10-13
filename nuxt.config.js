// 環境変数周り
let environment = process.env.ENVIRONEMNT
const subDomain = environment === "prod" ? "www" : environment // prodの場合は、wwwがサブドメイン
const baseUrl =
  environment === "local"
    ? "http://localhost:3000"
    : `https://${subDomain}.localing.ml`
environment = environment === "local" ? "dev" : environment // localの場合は、devを環境変数に

// nuxtソースのディレクトリ
const srcDir = "nuxt-app"

// メタタグ変数
const lang = "ja"
const siteName = "ローカりんぐ"
const siteDescription = ""
const siteKeywords = "LocalMedia"
const siteAuthor = "Canji"
const siteThemeColor = "#86C166"

// 画像パス
const eyecatchPath = baseUrl + "/eyecatch.png"
const iconsDir = "/icons"

export default {
  target: "server",
  srcDir: srcDir,
  head: {
    htmlAttrs: {
      lang,
    },
    titleTemplate: `%s | ${siteName}`,
    meta: [
      // 全体設定
      {
        charset: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        name: "format-detection",
        content: "telephone=no, email=no, address=no",
      },
      // メタタグ
      {
        hid: "description",
        name: "description",
        content: siteDescription,
      },
      {
        hid: "keywords",
        name: "keywords",
        content: siteKeywords,
      },
      {
        hid: "author",
        name: "author",
        content: siteAuthor,
      },
      {
        hid: "theme-color",
        name: "theme-color",
        content: siteThemeColor,
      },
      // ogp
      {
        hid: "og:type",
        property: "og:type",
        content: "website",
      },
      {
        hid: "og:url",
        property: "og:url",
        content: baseUrl,
      },
      {
        hid: "og:site_name",
        property: "og:site_name",
        content: siteName,
      },
      {
        hid: "og:title",
        property: "og:title",
        content: siteName,
      },
      {
        hid: "og:description",
        property: "og:description",
        content: siteDescription,
      },
      {
        hid: "og:image",
        property: "og:image",
        content: eyecatchPath,
      },
      // twitter
      {
        hid: "twitter:card",
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        hid: "twitter:title",
        name: "twitter:title",
        content: siteName,
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content: siteDescription,
      },
      {
        hid: "twitter:image",
        name: "twitter:image",
        content: eyecatchPath,
      },
      // pwa iOS
      {
        name: "apple-mobile-web-app-capable",
        content: "yes",
      },
      {
        name: "apple-mobile-web-app-status-bar-style",
        content: "black-translucent",
      },
    ],
    link: [
      // favicon
      {
        rel: "icon",
        sizes: "16x16",
        type: "image/png",
        href: iconsDir + "/icon-16.png",
      },
      {
        rel: "icon",
        sizes: "32x32",
        type: "image/png",
        href: iconsDir + "/icon-32.png",
      },
      {
        rel: "icon",
        sizes: "48x48",
        type: "image/png",
        href: iconsDir + "/icon-48.png",
      },
      {
        rel: "icon",
        sizes: "72x72",
        type: "image/png",
        href: iconsDir + "/icon-72.png",
      },
      {
        rel: "icon",
        sizes: "96x96",
        type: "image/png",
        href: iconsDir + "/icon-96.png",
      },
      {
        rel: "icon",
        sizes: "144x144",
        type: "image/png",
        href: iconsDir + "/icon-144.png",
      },
      {
        rel: "icon",
        sizes: "192x192",
        type: "image/png",
        href: iconsDir + "/icon-192.png",
      },
      {
        rel: "icon",
        sizes: "256x256",
        type: "image/png",
        href: iconsDir + "/icon-256.png",
      },
      // apple touch icon
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: iconsDir + "/apple-touch-icon.png",
      },
    ],
  },
  env: {
    ENVIRONEMNT: environment,
    GA_TRACKING_ID: process.env.GA_TRACKING_ID,
  },
  css: ["ress"],
  plugins: [
    { src: "@/plugins/day.js", ssr: true },
    { src: "@/plugins/windowSize.js", ssr: true },
    { src: "@/plugins/ga.js", ssr: true },
  ],
  components: true,
  buildModules: ["@nuxtjs/eslint-module"],
  modules: [
    "@nuxtjs/axios",
    // "@nuxtjs/pwa",
    "@nuxtjs/style-resources",
    "nuxt-fontawesome",
    "@nuxtjs/markdownit",
  ],
  styleResources: {
    scss: [
      "@/assets/scss/foundation/_media-queries.scss",
      "@/assets/scss/foundation/_variables.scss",
      "@/assets/scss/foundation/_global-styles.scss",
    ],
  },
  fontawesome: {
    imports: [
      {
        set: "@fortawesome/free-solid-svg-icons",
        icons: ["fas"],
      },
      {
        set: "@fortawesome/free-brands-svg-icons",
        icons: ["fab"],
      },
      {
        set: "@fortawesome/free-regular-svg-icons",
        icons: ["far"],
      },
    ],
  },
  markdownit: {
    injected: true,
  },
  build: {
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/,
        })
      }
    },
  },
  render: {
    compressor: (req, res, next) => {
      next()
    },
  },
}
