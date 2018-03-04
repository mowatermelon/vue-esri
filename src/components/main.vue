<template>
  <div id="main">
    <mo-header></mo-header>
    <main-view></main-view>
  </div>
</template>
<script>
import mainView from './mainbar'
import moHeader from './header'

export default {
  name: 'mainOa',
  data () {
    return {

    }
  },
  components:{
      moHeader,
      mainView
  }
}

</script>
<style lang="scss">
</style>
