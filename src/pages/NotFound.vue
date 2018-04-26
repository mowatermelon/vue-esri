<template>
  <div>
    <div class="help-container-block over-hide exception-content">
      <div class="flex-container align-items-center justify-content-center exception-content">
        <img src="../../static/plugins/other/img/404.png" class="imgException"/>
        <div>
          <h3 class="title">抱歉，你访问的页面不存在</h3>
          <p class="description" >您要找的页面没有找到，请返回
            <router-link to="/">首页</router-link>继续浏览
          </p>
        </div>
      </div>
    </div>
    <el-footer class="text-center">
      <h5>
        西瓜酱不开心~~~~~,委屈巴巴.jpg，不给个评分再走吗？
        <el-rate
            v-model="rateCount"
            :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
        </el-rate>
      </h5>
    </el-footer>
  </div>
</template>

<script>
export default {
  name: "NotFound",
  data() {
    return {
      rateCount: null
    };
  }
};
</script>

<style lang="scss" scoped>
$container-height:50vh;

@media screen and (max-width: 1199px) and (min-width: 721px){
  .help-container-block{
    min-height: $container-height/2;
  }
  .exception-content{
    .imgException {
      max-width: 180px;
      margin-right: 30px;
    }
  }
}
@media screen and (min-width: 1200px){
  .exception-content {
    min-height: $container-height;
    .imgException {
      max-width: 260px;
      margin-right: 50px;
    }
  }
}
</style>
