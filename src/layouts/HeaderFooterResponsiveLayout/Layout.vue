<template>
  <transition name="fade">
    <div>
      <div>
        <tool-box></tool-box>
      </div>
      <el-main class="n-p">
        <map-view></map-view>
        <!-- <screen-view></screen-view> -->
      </el-main>
    </div>
  </transition>
</template>
<script>

const ToolBox = resolve => require(['@/components/widgets/ToolBox'], resolve)
const MapView = resolve => require(['@/components/maps/Views/MapView'], resolve)
const ScreenView = resolve => require(['@/components/maps/Views/ScreenView'], resolve)

export default {
  name: 'Layout',
  data () {
    return {
    }
  },
  computed: {
    tcolor () {
      return this.$store.state.themeType;
    }
  },
  methods:{
  },
  components:{
    MapView,
    ToolBox,
    ScreenView
  }

}

</script>
<style lang="scss">
.el-container{
  overflow: hidden;
}
</style>
