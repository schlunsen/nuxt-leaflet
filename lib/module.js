const { resolve } = require('path')

module.exports = async function module (moduleOptions) {
  const options = Object.assign({}, moduleOptions)
  
  // Add leaflet css
  this.options.css.push('leaflet/dist/leaflet.css')
  
  this.addPlugin({
    src: resolve(__dirname, 'templates/plugin.js'),
    fileName: 'nuxt-leaflet.js',
    ssr: false,
    options
  })
}
