<template>
  <div>
    <h2>Camera Details</h2>
    <p><strong>Heading</strong>: {{ camera.heading.toFixed(3) }}</p>
    <p><strong>Tilt</strong>: {{ camera.tilt.toFixed(3) }}</p>
    <p><strong>Latitude</strong>: {{ camera.position.latitude.toFixed(3) }}</p>
    <p><strong>Longitude</strong>: {{ camera.position.longitude.toFixed(3) }}</p>
    <button @click='reset'>Reset Camera</button>
  </div>
</template>

<script>
export default {
  name: 'CameraInfo',
  props: {
    camera:{//
      type: Object,
      default: () => {
        tilt: 80
      }
    }
  },
  data () {
    return {}
  },
  methods: {
    reset: function() {
      let _this = this;
      var camera = _this.camera.clone();
      camera.set({
        position: [7.654, 45.919, 5184],
        tilt: 80
      });
      _this.$parent.view.goTo(camera);
    }
  }
}
</script>
