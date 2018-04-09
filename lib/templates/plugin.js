import Vue from 'vue'
import Vue2Leaflet from 'vue2-leaflet'

Vue.component('v-circle', Vue2Leaflet.LCircle)
Vue.component('v-circle-marker', Vue2Leaflet.LCircleMarker)
Vue.component('v-control-attribution', Vue2Leaflet.LControlAttribution)
Vue.component('v-control-layers', Vue2Leaflet.LControlLayers)
Vue.component('v-control-scale', Vue2Leaflet.LControlScale)
Vue.component('v-control-zoom', Vue2Leaflet.LControlZoom)
Vue.component('v-feature-group', Vue2Leaflet.LFeatureGroup)
Vue.component('v-geo-json', Vue2Leaflet.LGeoJson)
Vue.component('v-icon-default', Vue2Leaflet.LIconDefault)
Vue.component('v-image-overlay', Vue2Leaflet.LImageOverlay)
Vue.component('v-layer-group', Vue2Leaflet.LLayerGroup)
Vue.component('v-map', Vue2Leaflet.LMap)
Vue.component('v-marker', Vue2Leaflet.LMarker)
Vue.component('v-polygon', Vue2Leaflet.LPolygon)
Vue.component('v-polyline', Vue2Leaflet.LPolyline)
Vue.component('v-popup', Vue2Leaflet.LPopup)
Vue.component('v-rectangle', Vue2Leaflet.LRectangle)
Vue.component('v-tile-layer', Vue2Leaflet.LTileLayer)
Vue.component('v-tooltip', Vue2Leaflet.LTooltip)
Vue.component('v-lwms-tile-layer', Vue2Leaflet.LWMSTileLayer)

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
