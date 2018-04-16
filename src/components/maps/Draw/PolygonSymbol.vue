<template>
  <div>
  </div>
</template>

<script>

import esriLoader from 'esri-loader'

export default {
  name: 'PolygonSymbol',
  props: {
    PRings:{//polygon's rings
      type: Array,
      default: [],
      required: true
    },
    PColor:{//polygon's fill color
      type: Array,
      default: [255, 255, 255]
    },
    PlColor:{//polygon's outline color
      type: Array,
      default: [255, 255, 255]
    },
    PlWidth:{//polygon's outline width
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
        let polygon = {
          type: "polygon", // autocasts as Polygon
          rings: vertices,
          spatialReference: window.view.spatialReference
        };
        // Create a simple line symbol for rendering the line in the view
        let polygonSymbol = {
          type: "simple-fill", // autocasts as SimpleFillSymbol
          color: _this.PColor,
          style: "solid",
          outline: {  // autocasts as SimpleLineSymbol
            color: _this.PlColor,
            width: _this.PlWidth,
            cap: "round",
            join: "round"
          }
        };

        let polygonAtt = {
          Name: "polygon"+Number(new Date()),  // The name of the pipeline
        };

        let polygonGraphic = new Graphic({
          geometry: polygon,   // Add the geometry created in step 4
          symbol: polygonSymbol,   // Add the symbol created in step 5
          attributes: polygonAtt   // Add the attributes created in step 6
        });

        console.group("i begin to draw polygons")
        window.view.graphics.add(polygonGraphic);
      });
    }
  }
}
</script>








