import Vue from 'vue'
import Vue2Leaflet from 'vue2-leaflet'

Vue.component('v-map', Vue2Leaflet.LMap)
Vue.component('v-tilelayer', Vue2Leaflet.LTileLayer)
Vue.component('v-marker', Vue2Leaflet.LMarker)


// Build icon assets.
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.imagePath = ''
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png'
})


export default async function ({ router, store }) {
  

}
