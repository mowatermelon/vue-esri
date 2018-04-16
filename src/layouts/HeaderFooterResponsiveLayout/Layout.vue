<template>
  <transition name="fade">
    <el-container>
      <el-header>
        <v-header></v-header>
      </el-header>
      <div>
        <tool-box></tool-box>
      </div>
      <el-main class="n-p">
        <map-view></map-view>
        <!-- <screen-view></screen-view> -->
      </el-main>
    </el-container>
  </transition>
</template>
<script>
const VHeader = resolve => require(['@/components/pages/Header'], resolve)
const ToolBox = resolve => require(['@/components/tools/ToolBox'], resolve)
const MapView = resolve => require(['@/components/maps/Views/MapView'], resolve)

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
      VHeader,
      MapView,
      ToolBox
      // ScreenView
  }

}

</script>
<style lang="scss">
.el-container{
  overflow: hidden;
}
</style>
