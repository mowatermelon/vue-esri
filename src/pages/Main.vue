<template>
  <div>
    <el-container>
        <el-header>
            <top-bar></top-bar>
        </el-header>
        <el-main class="n-p">
            <router-view replace></router-view>
        </el-main>
    </el-container>
  </div>
</template>

<script>
const TopBar = resolve => require(['@/components/pages/TopBar'], resolve)

export default {
  name: "Main",
  data() {
    return {};
  },
  components:{
    TopBar
  }
};
</script>

<style lang="scss" scoped>
</style>
