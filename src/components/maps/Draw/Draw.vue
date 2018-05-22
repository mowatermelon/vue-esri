<template>
  <div id="DrawDiv">
    <component :is="polylineItem.component" :lPaths="polylineItem.lPaths" v-for="(polylineItem,polylineIIdx) in items.polyline" :key="polylineIIdx" :lColor="[48, 128, 254]" lWidth="5px"></component>
    <component :is="polygonItem.component" :PRings="polygonItem.PRings" v-for="(polygonItem,polygonIIdx) in items.polygon" :key="polygonIIdx" PlWidth="3px"></component>
    <component :is="pointItem.component" :iLong="pointItem.iLong" :iLati="pointItem.iLati" v-for="(pointItem,pointIIdx) in items.point" :key="pointIIdx"></component>

  </div>
</template>

<script>
import { loadModules } from "esri-loader";

const LineSymbol = resolve =>
  require(["@/components/maps/Draw/LineSymbol"], resolve);
const PolygonSymbol = resolve =>
  require(["@/components/maps/Draw/PolygonSymbol"], resolve);
const PictureMarkerSymbol = resolve =>
  require(["@/components/maps/Draw/PictureMarkerSymbol"], resolve);

export default {
  name: "Draw",
  props: {
    drawType: {
      //
      type: String,
      default: "polyline", //point | multipoint | polyline | polygon
      required: true
    }
  },
  data() {
    return {
      items: {
        point: [],
        multipoint: [],
        polyline: [],
        polygon: []
      }
    };
  },
  created() {
    let _this = this;
    _this.initLoad();
  },
  methods: {
    initLoad: function() {
      let _this = this;
// debugger;
      // let view = _this.$store.state.view;

      loadModules(["esri/views/2d/draw/Draw", "dojo/domReady!"], {
        url: "../../../../static/plugins/arcgis47/init.js"
      })
        .then(([Draw]) => {
          let draw = new Draw({
            view: _this.$store.state.view
          });

          // create an instance of draw polyline action
          let action = draw.create(_this.drawType); //point | multipoint | polyline | polygon
          _this.$store.state.view.focus();

          // listen to vertex-add event on the polyline draw action
          action.on("vertex-add", _this.updateVertices);

          // listen to vertex-remove event on the polyline draw action
          action.on("vertex-remove", _this.updateVertices);

          // listen to cursor-update event on the polyline draw action
          action.on("cursor-update", _this.updateVertices);

          // listen to draw-complete event on the polyline draw action
          action.on("draw-complete", _this.beginDrawing);
        })
        .catch(err => {
          // handle any errors
          console.error(err);
        });
    },
    beginDrawing(evt) {
      let _this = this;

      switch (_this.drawType) {
        case "point": {
          _this.items.point.push({
            component: "picture-marker-symbol",
            iLong: evt.coordinates[0],
            iLati: evt.coordinates[1]
          });
          break;
        }
        case "multipoint": {
          _this.items.multipoint.push({
            component: "picture-marker-symbol",
            iLong: evt.coordinates[0],
            iLati: evt.coordinates[1]
          });
          break;
        }
        case "polyline": {
          _this.items.polyline.push({
            component: "line-symbol",
            lPaths: evt.vertices
          });
          break;
        }
        case "polygon": {
          _this.items.polygon.push({
            component: "polygon-symbol",
            PRings: evt.vertices
          });
          break;
        }
        default: {
          _this.items.polyline.push({
            component: "line-symbol",
            lPaths: evt.vertices
          });
          break;
        }
      }

      // _this.view.graphics.removeAll();
    },
    /**
     * This function is called from the "vertex-add" and "vertex-remove"
     * events. Checks if the last vertex is making the line intersect itself.
     * @param {Vertices} evt
     */
    updateVertices(evt) {
      let _this = this;
      if (evt.type !== "cursor-update") {
        _this.beginDrawing(evt);
      }
    }
  },
  components: {
    LineSymbol,
    PolygonSymbol,
    PictureMarkerSymbol
  }
};
</script>
