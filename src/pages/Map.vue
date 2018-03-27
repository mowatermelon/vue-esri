<template>
  <div id="mapBox" class="map_box">
    <div id="map" @mousemove="showCoordinates($event)" class="map_div"></div>
    <button @click="centerZoom()" id="zoomCenter" class="btn btn-default" :class="{'hidden': isHide}">★</button>
    <p class="text-right map-info" :class="{'hide': isHide}">当前坐标：x:{{evt.x}},y:{{evt.y}}</p>
    </div>
</template>
<script>
  import esriLoader from 'esri-loader'

  export default {
    name: 'vMap',
    data () {
      return {
        map: {'loaded': ''},
        isHide: true,
        evt:{x:'',y:''}
      }
    },
    watch: {
      'map.loaded': function () {
        if (this.map.loaded == true) {
          this.isHide = false;
        }
      }

    },
    mounted: function () {
      // 监听esriLoader是否存在，创建map
      if (!esriLoader.isLoaded()) {
        // no, lazy load it the ArcGIS API before using its classes
        esriLoader.bootstrap((err) => {
          if (err) {
            console.error(err);
          } else {
            // once it's loaded, create the map
            this.createMap();
          }
        }, {
          // use a specific version instead of latest 4.x
          url: '../../static/plugins/js/init.js'
        });
      } else {
        // ArcGIS API is already loaded, just create the map
        this.createMap();
      }

    },
    methods: {
      // 创建地图
      createMap: function () {
        esriLoader.dojoRequire(["esri/map", "dojo/domReady!"], (Map) => {
          this.map = new Map("map", {
            center: [114.40845006666666,30.456864444444443],
            zoom: 16,
            basemap: "osm",//osm hybrid streets gray national-geographic oceans satellite streets-navigation-vector topo
            logo: false
          });
        });
      },
      // 缩放到中心图层
      centerZoom: function () {
        this.map.centerAndZoom([114.40845006666666,30.456864444444443], 16);
      },
      // 显示当前坐标
      showCoordinates: function(e) {
        let _this = this;
        if(!_this.isHide){
            _this.evt.x = e.mapPoint.x;
            _this.evt.y = e.mapPoint.y;
        }

      }

    }

  }
</script>
<style lang="scss" scoped>

  // @import url('https://js.arcgis.com/3.15/dijit/themes/tundra/tundra.css');
  // @import url('https://js.arcgis.com/3.20/esri/css/esri.css');
  @import './../../static/plugins/css/esri.css';
@media (max-width:768px){
  .map_box,.map_box .map_div {
    height: 100%;
  }
  .map-info{
    display: none;
  }
}
.map_box .map_div {
  width:100%;
  height: calc(100vh*0.8);
  cursor: pointer;
}
</style>
