<template>
  <div id="DrawDiv">
    <component :is="item.component" :lPaths="item.lPaths" v-for="(item,iIdx) in items" :key="iIdx" :lColor="[48, 128, 254]" lWidth="5px"></component>
    <!-- <component :is="item.component" :iLong="item.iLong" :iLati="item.iLati" v-for="(item,iIdx) in items" :key="iIdx"></component> -->

  </div>
</template>

<script>

import esriLoader from 'esri-loader'
import LineSymbol from './LineSymbol'
import PictureMarkerSymbol from './PictureMarkerSymbol'

export default {
  name: 'Draw',
  props: {
    drawType:{//
      type: String,
      default: "polyline",//point | multipoint | polyline | polygon
      required: true
    }
  },
  data () {
    return {
      items:[]
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
          view: window.view
        });

        // create an instance of draw polyline action
        let action = draw.create(_this.drawType);//point | multipoint | polyline | polygon
        window.view.focus();
        // fires when the drawing is completed
        // action.on("draw-complete", function (evt) {
        //   console.group("i know you draw complete")
        //   _this.measureLine(evt.vertices);
        // });
        // listen to vertex-add event on the polyline draw action
        action.on("vertex-add", _this.updateVertices);

        // listen to vertex-remove event on the polyline draw action
        action.on("vertex-remove", _this.updateVertices);

        // listen to cursor-update event on the polyline draw action
        action.on("cursor-update",  _this.updateVertices);

        // listen to draw-complete event on the polyline draw action
        action.on("draw-complete", _this.measureLine);
      });
    },
    measureLine(evt) {
      // console.group("i know you draw complete")
      let _this = this;
      // console.group("i know get the data of line",evt.vertices)
      _this.items.push({
         component: 'line-symbol',
         lPaths: evt.vertices
      })
      // _this.items.push({
      //    component: 'picture-marker-symbol',
      //    iLong: 114.40845006666666,
      //    iLati: 30.456864444444443
      // })
      // _this.view.graphics.removeAll();
    },
    /**
     * This function is called from the "vertex-add" and "vertex-remove"
     * events. Checks if the last vertex is making the line intersect itself.
     * @param {Vertices} evt
    */
    updateVertices(evt) {
      let _this = this;
      if (evt.type !=="cursor-update") {
        _this.measureLine(evt);
      }
    }
  },
  components:{
    LineSymbol,
    PictureMarkerSymbol
  }
}
</script>
