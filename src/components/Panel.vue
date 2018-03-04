<!--展示小车信息面板-->
<template>
  <div class="row">
    <div class="col-sm-12 col-md-12 col-lg-12">
      <div class="list-group" id="panel">
        <a href="#" class="list-group-item active">
          {{indxObj.code}}
        </a>
        <a href="#" class="list-group-item">起点：<span class="pull-right">{{indxObj.start}}</span></a>
        <a href="#" class="list-group-item">终点：<span class="pull-right">{{indxObj.end}}</span></a>
        <a href="#" class="list-group-item">当前位置：<span class="pull-right">{{indxObj.current_lng}}</span></a>
        <a href="#" class="list-group-item">剩余时间：<span class="pull-right">{{indxObj.current_lat}}</span></a>
        <a href="#" class="list-group-item">全程耗时：<span class="pull-right">{{indxObj.speed}}</span></a>
        <a href="#" class="list-group-item">行驶状态：<span class="pull-right">{{indxObj.state}}</span></a>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'panel',
    data() {
      return {
      }
    },
    props: ["indxObj"],

  }
</script>
<style>

</style>
