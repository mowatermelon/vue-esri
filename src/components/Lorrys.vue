<template>
  <div id="lorrys" class="container">

    <div class="row">
      <table class="table table-hover table-striped">
        <caption>物流卡车信息</caption>
        <thead>
        <tr>
          <th>车辆编号</th>
          <th>起点</th>
          <th>终点</th>
          <th>当前地址</th>
          <th>全程耗时</th>
          <th>剩余时间</th>
          <th>行驶状态</th>
          <th>操作</th>
        </tr>
        </thead>
        <tbody>
        <!--车牌号 起点 终点 当前位置 全程时间 剩余时间 行驶状态-->
        <tr v-for="(list, index) in lists">
          <td>{{list.code}}</td>
          <td>{{list.start}}</td>
          <td>{{list.end}}</td>
          <td>{{list.current}}</td>
          <td>00:00:00</td>
          <td>00:00:00</td>
          <td>{{list.state}}</td>
          <td>
          <router-link to="/NewLorry"><a @click="setUpdate(index)">修改</a></router-link>
          <a @click="remove(index)">删除</a>
          </td>
        </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>
<script>

  export default {
    name: 'lorrys',
    data () {
      return {
        lists:[],
        ref: this.ref()
      }
    },
    mounted: function(){
      let that = this;
      this.ref.on("child_added", function(snapshot) {
          let text = snapshot.val();
          that.lists.push(text);
      });
      this.ref.on("value", function(snapshot) {
        that.lists = snapshot.val();// 改变vue中数据
      });
    },
    methods: {
      remove: function(indx) {
        this.ref.child(this.lists[indx].code).remove();
      },
      setUpdate: function(indx) {
        this.$store.commit('getUpdate', this.lists[indx]);
      },
    }

  }

</script>
<style>
 #lorrys {
   position: relative;
   top: 4px;
 }
  /*复写*/
 .table-hover > tbody > tr:hover {
   background: lightblue;
 }
</style>
