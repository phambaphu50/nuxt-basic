const webpack = require('webpack')
module.exports = {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
      }
    ],
    script: [
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"
      },
      {
        src:
          "https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.bundle.min.js"
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: ["element-ui/lib/theme-chalk/index.css"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    "@/plugins/element-ui"],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ["@nuxtjs/style-resources"],
  styleResources: {
    scss: ["./assets/css/main.scss"]
  },
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   */
  build: {
    transpile: [/^element-ui/],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
    plugins: [
      new webpack.ProvidePlugin({
        jQuery: "jquery",
        $: "jquery",
        "window.jQuery": "jquery"
      })
    ]
  }
};
