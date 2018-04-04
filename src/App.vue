<template>
  <div id="app">
    <div v-if="isLogin">
      <login></login>
    </div>
    <div v-if="!isLogin">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
const Login = resolve => require(['@/pages/Login'], resolve)

export default {
  name: 'app',
  data () {
    return {
    }
  },
  computed: {
    isLogin () {
      return this.$store.state.isLogin;
    }
  },
  mounted() {
  },
  components:{
      Login
  },
  methods:{
  }
}

</script>

<style lang="scss">
   @import './assets/css/app.scss';
</style>
