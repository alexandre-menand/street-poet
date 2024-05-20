<script setup>
import { ref } from 'vue'
const center = ref([0, 45])
const projection = ref('EPSG:4326')
const zoom = ref(7)
const rotation = ref(0)

</script>

<template>
  <div>
    <ol-map :loadTilesWhileAnimating="true" :loadTilesWhileInteracting="true" style="height:90vh">
    <ol-view :center="center" :rotation="rotation" :zoom="zoom"
    :projection="projection" />
    <ol-tile-layer>
        <ol-source-osm />
    </ol-tile-layer>


  </ol-map>
  </div>

</template>

<style scoped>
@import 'vue3-openlayers/dist/vue3-openlayers.css';
</style>