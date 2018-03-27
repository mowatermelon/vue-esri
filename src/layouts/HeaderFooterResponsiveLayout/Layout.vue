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
        <v-map></v-map>
      </el-main>
    </el-container>
  </transition>
</template>
<script>
import VHeader from '../../components/Header'
import ToolBar from '../../components/ToolBar'
import vMap from '../../pages/Map'
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
      vMap,
      ToolBar
  }

}

</script>
<style lang="scss">
.el-container{
  overflow: hidden;
}
</style>
