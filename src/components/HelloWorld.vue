<template>
  <div ref="cesiumContainer" id="cesiumContainer">
    hello
  </div>
</template>

<script setup>
import { Viewer } from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";

const viewer = new Viewer("cesiumContainer");

console.log( "viewer", viewer)
</script>

<style scoped>
</style>
