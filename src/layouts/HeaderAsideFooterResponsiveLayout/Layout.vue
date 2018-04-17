<template>
  <transition name="fade">
    <el-container class="mainBox">
      <el-aside width="200px">
        <left-aside></left-aside>
      </el-aside>
      <el-container>
        <el-header>
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>王小虎</span>
        </el-header>
        <el-main>
          <message></message>
          <el-footer>
            <copyright></copyright>
          </el-footer>
        </el-main>

      </el-container>
    </el-container>
  </transition>
</template>
<script>

const LeftAside = resolve => require(['@/components/pages/LeftAside'], resolve)
const Message = resolve => require(['@/components/pages/Message'], resolve)
const Copyright = resolve => require(['@/components/pages/Copyright'], resolve)


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
    LeftAside,
    Message,
    Copyright
  }

}

</script>
<style lang="scss">

.mainBox{
  height: 100vh;
}
</style>
