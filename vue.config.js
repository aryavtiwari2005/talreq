const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      title: "Home || talreq",
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    capabilities: {
      entry: 'src/pages/Capabilities/main.js',
      template: 'public/index.html',
      title: "Capabilities || talreq",
      chunks: ['chunk-vendors', 'chunk-common', 'capabilities']
    },
    industries: {
      entry: 'src/pages/Industries/main.js',
      template: 'public/index.html',
      title: "Industries || talreq",
      chunks: ['chunk-vendors', 'chunk-common', 'industries']
    },
    insights: {
      entry: 'src/pages/Insights1/main.js',
      template: 'public/index.html',
      title: "Insights || talreq",
      chunks: ['chunk-vendors', 'chunk-common', 'insights']
    },
    insights1: {
      entry: 'src/pages/Insights/main.js',
      template: 'public/index.html',
      title: "Insights || talreq",
      chunks: ['chunk-vendors', 'chunk-common', 'insights1']
    },
    insights2: {
      entry: 'src/pages/Insights2/main.js',
      template: 'public/index.html',
      title: "Insights || talreq",
      chunks: ['chunk-vendors', 'chunk-common', 'insights2']
    },
    company: {
      entry: 'src/pages/Company/main.js',
      template: 'public/index.html',
      title: "Company || talreq",
      chunks: ['chunk-vendors', 'chunk-common', 'company']
    },
    privacypolicy: {
      entry: 'src/pages/PrivacyPolicy/main.js',
      template: 'public/index.html',
      title: "Privacy Policy || talreq",
      chunks: ['chunk-vendors', 'chunk-common', 'privacypolicy']
    },
    cookiepolicy: {
      entry: 'src/pages/CookiePolicy/main.js',
      template: 'public/index.html',
      title: "Cookie Policy || talreq",
      chunks: ['chunk-vendors', 'chunk-common', 'cookiepolicy']
    }
  }
})
