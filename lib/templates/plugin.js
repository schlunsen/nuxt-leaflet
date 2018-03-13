import Vue from 'vue'
import Vue2Leaflet from 'vue2-leaflet'

Vue.component('v-map', Vue2Leaflet.Map)
Vue.component('v-tilelayer', Vue2Leaflet.TileLayer)
Vue.component('v-marker', Vue2Leaflet.Marker)


// Build icon assets.
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.imagePath = ''
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('../assets/markers/marker-icon-2x.png'),
  iconUrl: require('../assets/markers/marker-icon.png'),
  shadowUrl: require('../assets/markers/marker-shadow.png')
})


export default async function ({ router, store }) {
  

}
