<template>
  <div id="app">
    <div v-if="isLogin">
      <login></login>
    </div>
    <div v-if="!isLogin">
      <el-container>
        <el-header>
          <top-bar></top-bar>
        </el-header>
        <el-main class="n-p">
          <!-- <router-view></router-view> -->
          <manage v-show="isManage"></manage>
          <default v-show="!isManage"></default>
        </el-main>
      </el-container>

    </div>
  </div>
</template>
<script>
const Login = resolve => require(['@/pages/Login'], resolve)
const TopBar = resolve => require(['@/components/pages/TopBar'], resolve)
const Manage = resolve => require(['@/pages/Manage'], resolve)
const Default = resolve => require(['@/pages/Default'], resolve)

export default {
  name: 'app',
  data () {
    return {
    }
  },
  computed: {
    isLogin () {
      return this.$store.state.isLogin;
    },
    isManage(){
      return JSON.parse(this.$store.state.isManage);
    }
  },
  components:{
    Login,
    TopBar,
    Manage,
    Default
  }
}

</script>

<style lang="scss">
   @import './assets/css/app.scss';
</style>
