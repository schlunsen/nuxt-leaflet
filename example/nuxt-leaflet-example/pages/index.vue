<template>
  <div>
    <div id="map-wrap" style="height: 100vh; width: 100%;">
      <no-ssr>
        <l-map :zoom="13" :center="[47.413220, -1.219482]">
          <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
          <l-marker :lat-lng="[47.413220, -1.219482]"></l-marker>
        </l-map>
      </no-ssr>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    
  }
};
</script>

