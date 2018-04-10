# nuxt-leaflet
[![npm (scoped with tag)](https://img.shields.io/npm/v/nuxt-leaflet/latest.svg?style=flat-square)](https://npmjs.com/package/nuxt-leaflet)
[![npm](https://img.shields.io/npm/dt/nuxt-leaflet.svg?style=flat-square)](https://npmjs.com/package/nuxt-leaflet)
[![CircleCI](https://img.shields.io/circleci/project/github/schlunsen/nuxt-leaflet.svg?style=flat-square)](https://circleci.com/gh/schlunsen/nuxt-leaflet)
[![Codecov](https://img.shields.io/codecov/c/github/schlunsen/nuxt-leaflet.svg?style=flat-square)](https://codecov.io/gh/schlunsen/nuxt-leaflet)
[![Dependencies](https://david-dm.org/schlunsen/nuxt-leaflet/status.svg?style=flat-square)](https://david-dm.org/schlunsen/nuxt-leaflet)
[![js-standard-style](https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com)

> Nuxt module for leafletjs

[📖 **Release Notes**](./CHANGELOG.md)

## Features

Nuxt module for vue2-leaflet.

See [vue2-leaflet](https://github.com/KoRiGaN/Vue2Leaflet) for more details.


## Setup
- Add `nuxt-leaflet` dependency using yarn or npm to your project
- Add `nuxt-leaflet` to `modules` section of `nuxt.config.js`

```js
{
  modules: [
    // Simple usage
    'nuxt-leaflet',

    // With options
    ['nuxt-leaflet', { /* module options */ }],
 ]
}
```

## Usage


Add the map to your page
``` html
<div id="map-wrap" style="height: 100%">
 <no-ssr>
   <v-map :zoom=13 :center="[47.413220, -1.219482]">
     <v-tilelayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></v-tilelayer>
     <v-marker :lat-lng="[47.413220, -1.219482]"></v-marker>
   </v-map>
 </no-ssr>
</div>
```


## List of currently implemented components

See [components](https://github.com/schlunsen/nuxt-leaflet/blob/master/lib/templates/plugin.js) supported


## Development

- Clone this repository
- Install dependnecies using `yarn install` or `npm install`
- Start development server using `npm run dev`

## License

[MIT License](./LICENSE)

Copyright (c) Rasmus Schlunsen
