<template>
  <div>
  </div>
</template>

<script>
import { loadModules } from "esri-loader";

export default {
  name: "ScaleBar",
  props: {
    position: {
      //
      type: String,
      default: "bottom-left" //top-left,top-right,bottom-left,bottom-right
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
      loadModules(["esri/widgets/ScaleBar","dojo/domReady!"], {
        url: "../../../../static/plugins/arcgis47/init.js"
      })
        .then(([ScaleBar]) => {
         let scaleBar = new ScaleBar({
            view: _this.$store.state.view,
            style: "line", //ruler or line
            unit: "metric" //non-metric, metric or dual
          });

          _this.$store.state.view.ui.add(scaleBar, {
            position: _this.position
          });
        })
        .catch(err => {
          // handle any errors
          console.error(err);
        });
    }
  }
};
</script>
