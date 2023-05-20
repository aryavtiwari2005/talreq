const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      title: "Home || Talreq",
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    capabilities: {
      entry: 'src/pages/Capabilities/main.js',
      template: 'public/index.html',
      title: "Capabilities || Talreq",
      chunks: ['chunk-vendors', 'chunk-common', 'capabilities']
    },
    industries: {
      entry: 'src/pages/Industries/main.js',
      template: 'public/index.html',
      title: "Industries || Talreq",
      chunks: ['chunk-vendors', 'chunk-common', 'industries']
    },
    insights: {
      entry: 'src/pages/Insights/main.js',
      template: 'public/index.html',
      title: "Insights || Talreq",
      chunks: ['chunk-vendors', 'chunk-common', 'insights']
    },
    company: {
      entry: 'src/pages/Company/main.js',
      template: 'public/index.html',
      title: "Company || Talreq",
      chunks: ['chunk-vendors', 'chunk-common', 'company']
    },
    privacypolicy: {
      entry: 'src/pages/PrivacyPolicy/main.js',
      template: 'public/index.html',
      title: "Privacy Policy || Talreq",
      chunks: ['chunk-vendors', 'chunk-common', 'privacypolicy']
    },
    cookiepolicy: {
      entry: 'src/pages/CookiePolicy/main.js',
      template: 'public/index.html',
      title: "Cookie Policy || Talreq",
      chunks: ['chunk-vendors', 'chunk-common', 'cookiepolicy']
    }
  }
})
