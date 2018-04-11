<template>
  <div class="map_box">
    <div id="viewDiv" class="map_div" @mousemove="showCoordinates($event)" ></div>
    <p class="text-right map-info" :class="{'hide': isHide}">当前坐标：x:{{evt.x}},y:{{evt.y}}</p>
  </div>
</template>
<script>
  import esriLoader from 'esri-loader'

  export default {
    name: 'ScreenView',
    data () {
      return {
        map: {'loaded': ''},
        isHide: true,
        evt:{x:'',y:''},
        camera:{}
      }
    },
    created(){
      let _this = this;
      _this.initLoad();
    },
    watch: {
      'map.loaded': function () {
        if (this.map.initialized == true) {
          this.isHide = false;
        }
      }

    },
    methods: {
      //初始化
      initLoad(){
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
            url: '../../../static/plugins/arcgis46/init.js'
          });
        } else {
          // ArcGIS API is already loaded, just create the map
          this.createMap();
        }
      },
      // 创建地图
      createMap: function () {
        let _this =this;

        esriLoader.dojoRequire(["esri/map", "esri/views/SceneView","dojo/domReady!"], (Map,SceneView) => {
          _this.map = new Map({
            basemap: "osm",
            ground: "world-elevation"// Use the world elevation service
          });
          _this.view = new SceneView({
            container: "viewDiv",     // Reference to the scene div created in step 5
            map: _this.map,                 // Reference to the map object created before the scene
            scale: 50000000,          // Sets the initial scale to 1:50,000,000
            center: [114.40845006666666,30.456864444444443],  // Sets the center point of view with lon/lat
            camera: {
              position: [7.654, 45.919, 5184],
              tilt: 80
            }
          });
          window.view = _this.view;
        });
      },
      // 缩放到中心图层
      centerZoom: function () {
        this.map.centerAndZoom([114.40845006666666,30.456864444444443], 16);
      },
      // 显示当前坐标
      showCoordinates: function(e) {
        let _this = this;
        _this.view.hitTest(e)
          .then(function(res){
            let point = res.results[0].mapPoint;
            if(!_this.isHide){
                _this.evt.x = point.x;
                _this.evt.y = point.y;
            }
        });
      }

    }

  }
</script>
<style lang="scss" scoped>
@import '../../../static/plugins/arcgis46/esri/css/main.css';
.map_box .map_div {
  width:100%;
  height: calc(100vh*0.8);
  cursor: pointer;
}
</style>
