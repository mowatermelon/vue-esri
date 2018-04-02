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
import VHeader from '../../components/Header'
import ToolBox from '../../components/ToolBox'
import MapView from '../../components/MapView'
// import ScreenView from '../../components/ScreenView'


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
