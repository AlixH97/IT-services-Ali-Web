const { defineConfig } = require('vite')
const react = require('@vitejs/plugin-react')
// const translationPlugin = require('./vite-plugin-translations.js')

// https://vitejs.dev/config/
module.exports = defineConfig({
  plugins: [
    react()
    // translationPlugin() // Temporarily disabled to fix white screen
  ],
  server: {
    port: 3000,
    open: true
  }
})
