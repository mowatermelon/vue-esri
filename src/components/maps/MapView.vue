<template>
  <div class="map_box">
    <div id="viewDiv" class="map_div" @mousemove="showCoordinates($event)" ></div>
    <p class="text-right map-info" :class="{'hide': isHide}">当前坐标：x:{{evt.x}},y:{{evt.y}}</p>
    <scale-bar></scale-bar>
    <picture-marker-symbol  :iLong="114.40845006666666" :iLati="30.456864444444443"></picture-marker-symbol>
    <line-symbol :lPaths="[[114.40845006666666,30.456864444444443],[114.40845006666666,35.456864444444443],[114.40845006666666,40.456864444444443]]" :lColor="[226, 119, 40]" lWidth="2px"></line-symbol>
  </div>
</template>
<script>
  import esriLoader from 'esri-loader'
  import ScaleBar from './ScaleBar'
  import PictureMarkerSymbol from './PictureMarkerSymbol'
  import LineSymbol from './LineSymbol'


  export default {
    name: 'MapView',
    data () {
      return {
        map: {'loaded': ''},
        isHide: true,
        evt:{x:'',y:''},
        view:{}
      }
    },
    created(){
      let _this = this;
      _this.initLoad();
    },
    watch: {
      'map.loaded': function () {
        if (this.map.initialized) {
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
      createMap() {
        let _this =this;

        esriLoader.dojoRequire(["esri/map", "esri/views/MapView"], (Map,MapView) => {
          _this.map = new Map({
            basemap: "osm"
          });
          _this.view = new MapView({
            container: "viewDiv",
            map: _this.map,
            scale: 50,          // Sets the initial scale to 1:50,000,000
            center: [114.40845006666666,30.456864444444443]  // Sets the center point of view with lon/lat
          });
          EventBus.$emit('setView',_this.view);
        });
      },
      // 缩放到中心图层
      centerZoom() {
        this.map.centerAndZoom([114.40845006666666,30.456864444444443], 16);
      },
      // 显示当前坐标
      showCoordinates(e) {
        let _this = this;
        if(!_this.isHide){
          _this.view.hitTest(e)
            .then(function(res){
              let point = res.screenPoint;
              if(!_this.isHide){
                  _this.evt.x = point.x;
                  _this.evt.y = point.y;
              }
          });
        }

      },
      //添加视图部件
      addWidget(view){
        this.addWidgetScaleBar(view);
      },
      //添加比例尺视图部件
      addWidgetScaleBar(view){
        esriLoader.dojoRequire(["esri/widgets/ScaleBar","dojo/domReady!"], (ScaleBar) => {
          let scaleBar = new ScaleBar({
            view: view
          });
          // Add widget to the bottom left corner of the view
          view.ui.add(scaleBar, {
            position: "bottom-left"
          });
        });

      }

    },
    components:{
      ScaleBar,
      PictureMarkerSymbol,
      LineSymbol
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
