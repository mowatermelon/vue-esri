<template>
  <div>
  </div>
</template>

<script>

import esriLoader from 'esri-loader'

export default {
  name: 'ScaleBar',
  props: {
    position:{//
      type: String,
      default: "bottom-left"//top-left,top-right,bottom-left,bottom-right
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
      esriLoader.dojoRequire(["esri/widgets/ScaleBar","dojo/domReady!"], (ScaleBar) => {
        let scaleBar = new ScaleBar({
          view: window.view,
          style:"line",//ruler or line
          unit:"metric"//non-metric, metric or dual
        });

        window.view.ui.add(scaleBar, {
          position: _this.position
        });
      });
    }
  }
}
</script>
