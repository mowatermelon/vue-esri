<template>
  <div class="hello" id="hello">
    <h1>{{ msg }}</h1>
    <h1>{{ msg }}</h1>
    <h1>{{ msg }}</h1>
    <h1>{{ msg }}</h1>
    <h1>{{ msg }}</h1>
    <h1>{{ msg }}</h1>

    <h2>Essential Links</h2>
  </div>
</template>

<script>
export default {
  name: 'Hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.hello{
  color:#333333;
}
</style>
