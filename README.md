# nuxt-leaflet
[![npm (scoped with tag)](https://img.shields.io/npm/v/nuxt-leaflet/latest.svg?style=flat-square)](https://npmjs.com/package/nuxt-leaflet)
[![npm](https://img.shields.io/npm/dt/nuxt-leaflet.svg?style=flat-square)](https://npmjs.com/package/nuxt-leaflet)
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
<div id="map-wrap" style="height: 100vh">
 <client-only>
   <l-map :zoom=13 :center="[55.9464418,8.1277591]">
     <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
     <l-marker :lat-lng="[55.9464418,8.1277591]"></l-marker>
   </l-map>
 </client-only>
</div>
```

The Leaflet 'L' object can be found on vue component: ```this.$L``` 

## Typescript

If you're using TypeScript, you'll need to add nuxt-leaflet in your compilerOptions of your tsconfig.json :

```json
{
  "compilerOptions": {
    "types": [
      "@types/node",
      "@nuxt/vue-app",
      "nuxt-leaflet"
    ]
  }
}
```

You'll then be able to have autocompletion in Vue instances (```this.$L```).


## List of currently implemented components

See [components](https://github.com/schlunsen/nuxt-leaflet/blob/master/lib/templates/plugin.js) supported


## Development

- Clone this repository
- Install dependencies using `yarn install` or `npm install`
- Start development server using `npm run dev`

## License

[MIT License](./LICENSE)

Copyright (c) Rasmus Schlunsen
