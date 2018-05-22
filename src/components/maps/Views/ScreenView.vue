<template>
  <div class="map_box">
    <div id="viewDiv" class="map_div" @mousemove="showCoordinates($event)" ></div>
    <p class="text-right map-info" :class="{'hide': isHide}">当前坐标：x:{{evt.x}},y:{{evt.y}}</p>
  </div>
</template>
<script>
import { loadModules } from "esri-loader";

export default {
  name: "ScreenView",
  data() {
    return {
      isHide: true,
      evt: { x: "", y: "" },
      camera: {}
    };
  },
  created() {
    let _this = this;
    _this.initLoad();
  },
  methods: {
    //初始化
    initLoad() {
      let _this = this;
      loadModules(["esri/Map", "esri/views/SceneView", "dojo/domReady!"], {
        url: "../../../../static/plugins/arcgis47/init.js"
      })
        .then(([Map, SceneView]) => {
          _this.createMap(Map, SceneView);
        })
        .catch(err => {
          // handle any errors
          console.error(err);
        });
    },
    createMap(Map, SceneView) {
      let _this = this;
      let map = new Map({
        basemap: "osm",
        ground: "world-elevation" // Use the world elevation service
      });
      _this.isHide = false;
      _this.$store.commit("setMap", map);
      let view = new SceneView({
        container: "viewDiv", // Reference to the scene div created in step 5
        map, // Reference to the map object created before the scene
        scale: 50000000, // Sets the initial scale to 1:50,000,000
        center: [114.40845006666666, 30.456864444444443], // Sets the center point of view with lon/lat
        camera: {
          position: [7.654, 45.919, 5184],
          tilt: 80
        }
      });
      _this.$store.commit("setView", view);
    },
    // 缩放到中心图层
    centerZoom: function() {
      this.map.centerAndZoom([114.40845006666666, 30.456864444444443], 16);
    },
    // 显示当前坐标
    showCoordinates: function(e) {
      let _this = this;
      let view = _this.$store.state.view;
      view.hitTest(e).then(function(res) {
        let point = res.results[0].mapPoint;
        if (!_this.isHide) {
          _this.evt.x = point.x;
          _this.evt.y = point.y;
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../../../static/plugins/arcgis47/esri/css/main.css";
.map_box .map_div {
  width: 100%;
  height: calc(100vh * 0.8);
  cursor: pointer;
}
</style>
