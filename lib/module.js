const { resolve } = require('path')

module.exports = async function module (moduleOptions) {
  const options = Object.assign({}, moduleOptions)
  
  // Add leaflet css
  this.options.css.push('https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/leaflet.css')
  
  this.addPlugin({
    src: resolve(__dirname, 'templates/plugin.js'),
    fileName: 'nuxt-leaflet.js',
    ssr: false,
    options
  })
}
