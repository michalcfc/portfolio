const withPWA = require("next-pwa");
const { i18n } = require('./next-i18next.config')

module.exports = withPWA({
    images: {
        domains: ['localhost'],
    },
    reactStrictMode: true,
    pwa: {
        dest: "public",
        register: true,
        skipWaiting: true,
        disable: process.env.NODE_ENV === "development",
    },
    i18n
})