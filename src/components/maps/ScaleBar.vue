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
      esriLoader.dojoRequire(["esri/widgets/ScaleBar","dojo/domReady!"], (ScaleBar) => {
        let scaleBar = new ScaleBar({
          view: _this.view
        });

        _this.view.ui.add(scaleBar, {
          position: _this.position
        });
      });
      EventBus.$emit('setView',_this.view);
    }
  }
}
</script>
