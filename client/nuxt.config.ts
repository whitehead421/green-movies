// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "nuxt-icon",
    "@nuxt/image",
    "nuxt-swiper",
  ],
  plugins: [{ src: "~/plugins/highcharts.client.js", mode: "client" }],
});
