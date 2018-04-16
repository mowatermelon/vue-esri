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
    }
  },
  created(){
    let _this = this;
    _this.initLoad();
  },
  methods: {
    initLoad: function() {
      let _this = this;
      esriLoader.dojoRequire(["esri/Graphic","dojo/domReady!"], (Graphic) => {
        let polyline = {
          type: "polyline",  // autocasts as new Polyline()
          paths: _this.lPaths,
          spatialReference: window.view.spatialReference
        };
        // Create a simple line symbol for rendering the line in the view
        let lineSymbol = {
          type: "simple-line",  // autocasts as new SimpleLineSymbol()
          color: _this.lColor,  // RGB color values as an array
          width: _this.lWidth,
          cap: "round",
          join: "round"
        };
        let lineAtt = {
          Name: "polyline"+Number(new Date()),  // The name of the pipeline
        };

        let polylineGraphic = new Graphic({
          geometry: polyline,   // Add the geometry created in step 4
          symbol: lineSymbol,   // Add the symbol created in step 5
          attributes: lineAtt   // Add the attributes created in step 6
        });

        console.group("i begin to draw lines")
        window.view.graphics.add(polylineGraphic);
      });
    }
  }
}
</script>








