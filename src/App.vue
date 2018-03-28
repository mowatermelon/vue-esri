<template>
  <div id="app">
    <div v-if="isLogin">
      <login></login>
    </div>
    <div v-if="!isLogin">
      <layout></layout>
    </div>
  </div>
</template>
<script>

import Login from './pages/Login'
import Layout from './layouts/HeaderFooterResponsiveLayout/Layout'

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
      Login,
      Layout
  },
  methods:{
  }
}

</script>

<style lang="scss">
   @import './assets/css/app.scss';
</style>
