import Vue from 'vue'
import * as Vue2Leaflet from 'vue2-leaflet'

Vue.component('l-circle', Vue2Leaflet.LCircle)
Vue.component('l-circle-marker', Vue2Leaflet.LCircleMarker)
Vue.component('l-control', Vue2Leaflet.LControl)
Vue.component('l-control-attribution', Vue2Leaflet.LControlAttribution)
Vue.component('l-control-layers', Vue2Leaflet.LControlLayers)
Vue.component('l-control-scale', Vue2Leaflet.LControlScale)
Vue.component('l-control-zoom', Vue2Leaflet.LControlZoom)
Vue.component('l-feature-group', Vue2Leaflet.LFeatureGroup)
Vue.component('l-geo-json', Vue2Leaflet.LGeoJson)
Vue.component('l-grid-layer', Vue2Leaflet.LGridLayer)
Vue.component('l-icon', Vue2Leaflet.LIcon)
Vue.component('l-icon-default', Vue2Leaflet.LIconDefault)
Vue.component('l-image-overlay', Vue2Leaflet.LImageOverlay)
Vue.component('l-layer-group', Vue2Leaflet.LLayerGroup)
Vue.component('l-map', Vue2Leaflet.LMap)
Vue.component('l-marker', Vue2Leaflet.LMarker)
Vue.component('l-polygon', Vue2Leaflet.LPolygon)
Vue.component('l-polyline', Vue2Leaflet.LPolyline)
Vue.component('l-popup', Vue2Leaflet.LPopup)
Vue.component('l-rectangle', Vue2Leaflet.LRectangle)
Vue.component('l-tile-layer', Vue2Leaflet.LTileLayer)
Vue.component('l-tooltip', Vue2Leaflet.LTooltip)
Vue.component('l-lwms-tile-layer', Vue2Leaflet.LWMSTileLayer)

// Build icon assets.
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.imagePath = ''
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
})

const LeafletPlugin = {
  install(Vue, options) {
    // Expose Leaflet
    Vue.prototype.$L = L;
  }
};

Vue.use(LeafletPlugin)

export default async function ({ router, store }) {


}
