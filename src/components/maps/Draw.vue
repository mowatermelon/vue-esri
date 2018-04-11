<template>
  <div id="DrawDiv">
    <!-- <component :is="item.component" :lPaths="item.lPaths" v-for="(item,iIdx) in items" :key="iIdx" :lColor="[226, 119, 40]" lWidth="20px"></component> -->
    <component :is="item.component" :iLong="item.iLong" :iLati="item.iLati" v-for="(item,iIdx) in items" :key="iIdx"></component>

  </div>
</template>

<script>

import esriLoader from 'esri-loader'
import LineSymbol from './LineSymbol'
import PictureMarkerSymbol from './PictureMarkerSymbol'
import {getById,prependElm} from '../../service/domOperating'


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
        let action = draw.create("polyline");//point | multipoint | polyline | polygon

        // fires when the drawing is completed
        action.on("draw-complete", function (evt) {
          console.group("i know you draw complete")
          _this.measureLine(evt.vertices);
        });

      });
    },
    measureLine(vertices) {
      let _this = this;
      console.group("i know get the data of line",vertices)
      // _this.items.push({
      //    component: 'line-symbol',
      //    lPaths: vertices
      // })
      _this.items.push({
         component: 'picture-marker-symbol',
         iLong: 114.40845006666666,
         iLati: 30.456864444444443
      })
      // _this.view.graphics.removeAll();
      // <picture-marker-symbol  :iLong="114.40845006666666" :iLati="30.456864444444443"></picture-marker-symbol>
    },

  },
  components:{
    LineSymbol,
    PictureMarkerSymbol
  }
}
</script>
