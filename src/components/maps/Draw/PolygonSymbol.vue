<template>
  <div>
  </div>
</template>

<script>
import { loadModules } from "esri-loader";

export default {
  name: "PolygonSymbol",
  props: {
    PRings: {
      //polygon's rings
      type: Array,
      default: () => {
        return [];
      },
      required: true
    },
    PColor: {
      //polygon's fill color
      type: [String, Array],
      default: () => {
        return [255, 255, 255, 0.3];
      }
    },
    PlColor: {
      //polygon's outline color
      type: [String, Array],
      default: () => {
        return [48, 128, 254];
      }
    },
    PlWidth: {
      //polygon's outline width
      type: [String, Number],
      default: 0.75
    }
  },
  data() {
    return {};
  },
  created() {
    let _this = this;
    _this.initLoad();
  },
  methods: {
    initLoad: function() {
      let _this = this;
      loadModules(["esri/Graphic", "esri/views/MapView"], {
        url: "../../../../static/plugins/arcgis47/init.js"
      })
        .then(([Graphic]) => {
          _this.createdPolygonSymbol(Graphic);
        })
        .catch(err => {
          // handle any errors
          console.error(err);
        });
    },
    createdPolygonSymbol: function(Graphic) {
      let _this = this;
      let view = _this.$store.state.view;
      let polygon = {
        type: "polygon", // autocasts as Polygon
        rings: _this.PRings,
        spatialReference: view.spatialReference
      };
      // Create a simple line symbol for rendering the line in the view
      let polygonSymbol = {
        type: "simple-fill", // autocasts as SimpleFillSymbol
        color: _this.PColor,
        style: "solid",
        outline: {
          // autocasts as SimpleLineSymbol
          color: _this.PlColor,
          width: _this.PlWidth,
          cap: "round",
          join: "round"
        }
      };

      let polygonAtt = {
        Name: "polygon" + Number(new Date()) // The name of the pipeline
      };

      let polygonGraphic = new Graphic({
        geometry: polygon, // Add the geometry created in step 4
        symbol: polygonSymbol, // Add the symbol created in step 5
        attributes: polygonAtt // Add the attributes created in step 6
      });
      view.graphics.add(polygonGraphic);
      _this.$store.commit("setView", view);
    }
  }
};
</script>







