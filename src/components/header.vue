<template>
  <div class="mo-oa-header">
    <div class="navbar-header">
      <i class="glyphicon glyphicon-globe"></i>
      <h4 class="mo-text">watermelon webgis</h4>
    </div>
    <div class="navbar-form navbar-right navbar-mo-form">
      <!--<div class="input-group">
        <input type="text" class="form-control" placeholder="请输入地点名查询">
        <span class="input-group-btn">
          <button class="btn btn-default" type="button"><span class="glyphicon glyphicon-search" aria-hidden="true"></span></button>
        </span>
      </div>-->

      <p class="navbar-text mo-text">欢迎<a href="#" class="navbar-link">123</a>用户</p>

    </div>
  </div>
</template>

<script>
export default {
  name: 'moHeader',
  data () {
    return {

    }
  }
}
</script>
<style lang="scss" scoped>
$slogan_size:4rem;
$slogan_padding:1rem;

.navbar-header{
  .glyphicon.glyphicon-globe{
    font-size:$slogan_size;
    // padding:$slogan_padding;
  }
  // .mo-text{
  //   display: inline-block;
  //   // line-height: 64px;
  //   margin: 0;
  //   vertical-align: top;
  // }
}
.mo-text{
  display: inline-block;
  // line-height: 64px;
  margin: 0;
  vertical-align: top;
}



</style>
