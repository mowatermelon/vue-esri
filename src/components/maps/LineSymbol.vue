<template>
  <div>
  </div>
</template>

<script>

import esriLoader from 'esri-loader'

export default {
  name: 'LineSymbol',
  props: {
    lPaths:{//
      type: Array,
      default: [],
      required: true
    },
    lColor:{//
      type: Array,
      default: [255, 255, 255]
    },
    lWidth:{//
      type: [String,Number],
      default: 0.75
    }
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
      esriLoader.dojoRequire(["esri/Graphic","dojo/domReady!"], (Graphic) => {
        let polyline = {
          type: "polyline",  // autocasts as new Polyline()
          paths: _this.lPaths
        };
        // Create a simple line symbol for rendering the line in the view
        let lineSymbol = {
          type: "simple-line",  // autocasts as new SimpleLineSymbol()
          color: _this.lColor,  // RGB color values as an array
          width: _this.lWidth
        };
        // let lineAtt = {
        //   Name: "Keystone Pipeline",  // The name of the pipeline
        //   Owner: "TransCanada",  // The owner of the pipeline
        //   Length: "3,456 km"  // The length of the pipeline
        // };

        let polylineGraphic = new Graphic({
          geometry: polyline,   // Add the geometry created in step 4
          symbol: lineSymbol,   // Add the symbol created in step 5
          // attributes: lineAtt   // Add the attributes created in step 6
        });

        _this.view.graphics.add(polylineGraphic);


      });
      EventBus.$emit('setView',_this.view);
    }
  }
}
</script>








