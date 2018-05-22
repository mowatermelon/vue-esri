<template>
  <div class="map_box">
    <div id="viewDiv" class="map_div" @mousemove="showCoordinates($event)" ></div>
    <p class="text-right map-info" :class="{'hide': isHide}">当前坐标：x:{{evt.x}},y:{{evt.y}}</p>
    <scale-bar></scale-bar>
    <component :is="drawItem.component" :drawType="drawItem.drawType" v-for="(drawItem,drawIdx) in drawItems" :key="drawIdx"></component>
  </div>
</template>
<script>
import { loadModules } from "esri-loader";
import ScaleBar from "../Widgets/ScaleBar";
import Draw from "../Draw/Draw";

export default {
  name: "MapView",
  data() {
    // debugger;
    return {
      isHide: true,
      evt: { x: "", y: "" },
      drawItems: this.$store.state.drawComponents
    };
  },
  created() {
    let _this = this;
    _this.initLoad();
  },
  // watch: {
  //   drawItems: function (newItems, oldItems) {
  //     this.drawItemsCopy = newItems;
  //   }
  // },
  methods: {
    //初始化
    initLoad() {
      let _this = this;

      loadModules(["esri/Map", "esri/views/MapView"], {
        url: "../../../../static/plugins/arcgis47/init.js"
      })
        .then(([Map, MapView]) => {
          _this.createMap(Map, MapView);
        })
        .catch(err => {
          // handle any errors
          console.error(err);
        });
    },
    createMap(Map, MapView) {
      let _this = this;
      let map = new Map({
        basemap: "osm",
        showLegend: true
      });
      _this.isHide = false;
      _this.$store.commit("setMap", map);
      let view = new MapView({
        container: "viewDiv",
        map,
        scale: 50, // Sets the initial scale to 1:50,000,000
        center: [114.40845006666666, 30.456864444444443] // Sets the center point of view with lon/lat
      });
      _this.$store.commit("setView", view);
    },
    // 缩放到中心图层
    centerZoom() {
      this.map.centerAndZoom([114.40845006666666, 30.456864444444443], 16);
    },
    createDrawing(type) {
      debugger;
      let _this = this;
      _this.drawItems.push({
        component: "draw",
        drawType: type
      });
    },
    // 显示当前坐标
    showCoordinates(e) {
      let _this = this;
      if (!_this.isHide) {
        let view = _this.$store.state.view;
        view.hitTest(e).then(function(res) {
          let point = res.screenPoint;
          if (!_this.isHide) {
            _this.evt.x = point.x;
            _this.evt.y = point.y;
          }
        });
      }
    }
  },
  components: {
    ScaleBar,
    Draw
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
