<template>
  <transition name="fade">
    <el-container>
      <el-header>
        <v-header></v-header>
      </el-header>
      <el-header>
        <tool-bar></tool-bar>
      </el-header>
      <el-main>
        <map-view></map-view>
        <!-- <screen-view></screen-view> -->
      </el-main>
    </el-container>
  </transition>
</template>
<script>
import VHeader from '../../components/Header'
import ToolBar from '../../components/ToolBar'
import MapView from '../../pages/MapView'
// import ScreenView from '../../pages/ScreenView'


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
      ToolBar
      // ScreenView
  }

}

</script>
<style lang="scss">
.el-container{
  overflow: hidden;
}
</style>
