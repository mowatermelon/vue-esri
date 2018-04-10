<template>
  <div id="sliderDiv"></div>
</template>

<script>

import esriLoader from 'esri-loader'

export default {
  name: 'Draw',
  props: {
    // position:{//
    //   type: String,
    //   default: "bottom-left"//top-left,top-right,bottom-left,bottom-right
    // }
  },
  data () {
    return {
      view:{}
    }
  },
  created(){
    let _this = this;
    if(!!_this.view){
      EventBus.$on('setView',function(data){
        _this.view = data;
      });
    }
    _this.initLoad();
  },
  methods: {
    initLoad: function() {
      let _this = this;
      esriLoader.dojoRequire(["esri/views/2d/draw/Draw","dojo/domReady!"], (Draw) => {
        let draw = new Draw({
          view: _this.view
        });

        // create an instance of draw polyline action
        let action = draw.create("polyline");//point | multipoint | polyline | polygon

        // fires when a vertex is added
        action.on("vertex-add", function (evt) {
          _this.measureLine(evt.vertices);
        });

        // fires when the pointer moves
        // action.on("cursor-update", function (evt) {
        //   _this.measureLine(evt.vertices);
        // });

        // fires when the drawing is completed
        // action.on("draw-complete", function (evt) {
        //   _this.measureLine(evt.vertices);
        // });

        // fires when a vertex is removed
        // action.on("vertex-remove", function (evt) {
        //   _this.measureLine(evt.vertices);
        // });
      });
      EventBus.$emit('setView',_this.view);
    },
    measureLine(vertices) {
      let _this = this;
      debugger;
      // _this.view.graphics.removeAll();

      // let line = _this.createLine(vertices);
      // let lineLength = geometryEngine.geodesicLength(line, "miles");
      // let graphic = createGraphic(line);
      // _this.view.graphics.add(graphic);
    },
    createPolylineGraphic(vertices){
      let _this = this;
      _this.view.graphics.removeAll();
      var polyline = {
        type: "polyline", // autocasts as Polyline
        paths: vertices,
        spatialReference: _this.view.spatialReference
      };

      var graphic = new Graphic({
        geometry: polyline,
        symbol: {
          type: "simple-line", // autocasts as SimpleLineSymbol
          color: [4, 90, 141],
          width: 3,
          cap: "round",
          join: "round"
        }
    });
    view.graphic.add(graphic);
    }
  }
}
</script>
