<template>
  <div id="app" class="mo-container" :class="'mo-theme-'+tcolor">
    <div v-if="isLogin">
      <login @increment="checkLogin"></login>
    </div>
    <div v-if="!isLogin">
      <main-oa></main-oa>
    </div>
  </div>
</template>
<script>
import mainOa from './components/main'
import login from './components/login'

// Vue.use(Vuex)
export default {
  name: 'app',
  data () {
    let that = this;
    return {
      tcolor:'blue',
      // isLogin: this.$store.state.isLogin      
      isLogin: true
    }
  },
  mounted: function(){
      // let that = this;    
  },
  components:{
      login,
      mainOa
  },
  methods:{
    checkLogin (state) {
      console.log('checkLogin'); 
      // console.log(state); 
           
      let that = this;
      if(typeof(state)!="boolean"){
        state = false;
      }
      that.isLogin = state;
    }
  }
}

</script>
<style lang="scss">
  // @import './assets/css/appVue.scss';
   @import './assets/css/appMap.scss';
</style>
