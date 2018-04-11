<template>
  <div>
  </div>
</template>

<script>

import esriLoader from 'esri-loader'

export default {
  name: 'PictureMarkerSymbol',
  props: {
    imgUrl:{//
      type: String,
      default: "mark.png"//
    },
    iLong:{//
      type: Number,
      default: 0,
      required: true
    },
    iLati:{//
      type: Number,
      default: 0,
      required: true
    },
    iWidth:{//
      type: [String,Number],
      default: "15px"
    },
    iHeight:{//
      type: [String,Number],
      default: "15px"
    },
    xOffset:{//
      type: [String,Number],
      default: 0
    },
    yOffset:{//
      type: [String,Number],
      default: 0
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
        var picPoint = {
          type: "point",  // autocasts as new Point()
          longitude: _this.iLong,
          latitude: _this.iLati
        };

        let picSymbol = {
          type: "picture-marker",  // autocasts as new PictureMarkerSymbol()
          url: "../../../static/plugins/other/img/"+_this.imgUrl,
          width: _this.iWidth,
          height: _this.iHeight,
          xoffset:_this.xOffset,
          yoffset:_this.yOffset
        };
        let picGraphic = new Graphic({
          symbol: picSymbol,
          geometry: picPoint
        });

        // Add the picture graphic to the view's GraphicsLayer
        window.view.graphics.add(picGraphic);

      });
    }
  }
}
</script>








