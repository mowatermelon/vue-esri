<template>
  <div id="sliderDiv">
  </div>
</template>

<script>

import esriLoader from 'esri-loader'

export default {
  name: 'SizeSlider',
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
      esriLoader.dojoRequire(["esri/widgets/SizeSlider","dojo/domReady!"], (SizeSlider) => {
        let sliderVisualVariable = {
          type: "size",
          field: "count",
          minSize: "6px",
          maxSize: "50px",
          minDataValue: 0,
          maxDataValue: 100
        };
        let sizeSlider = new SizeSlider({
          // statistics: stats,  // object generated from summaryStatistics()
          visualVariable: sliderVisualVariable,  // size visual variable generated from a sizeRendererCreator method
        }, "sliderDiv");
        // _this.view


        _this.view.ui.add(sizeSlider);
      });
      EventBus.$emit('setView',_this.view);
    }
  }
}
</script>
