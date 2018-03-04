<template>
  <div id="newLorry" class="container">
    <div class="row">
      <div class="col-sm-10 col-md-6 col-lg-6 col-sm-offset-1 col-md-offset-3 col-lg-offset-3">
        <form class="form-horizontal">
          <div class="form-group">
            <label for="inputText1" class="col-sm-3 control-label">车辆编号</label>
            <div class="col-sm-9">
              <input type="text" class="form-control" id="inputText1" v-model="code" required placeholder="车辆编号">
            </div>
          </div>
          <div class="form-group">
            <label for="inputText2" class="col-sm-3 control-label">起点</label>
            <div class="col-sm-9">
              <input type="text" class="form-control" id="inputText2" v-model="start" required placeholder="请输入起点">
            </div>
          </div>
          <div class="form-group">
            <label for="inputText3" class="col-sm-3 control-label">终点</label>
            <div class="col-sm-9">
              <input type="text" class="form-control" id="inputText3" v-model="end" required placeholder="请输入终点">
            </div>
          </div>
          <div class="form-group">
            <label for="inputNumber1" class="col-sm-3 control-label">当前经度</label>
            <div class="col-sm-9">
              <input type="number" class="form-control" id="inputNumber1" v-model="current_lng"
                     placeholder="请输入当前地址(经度)">
            </div>
          </div>
          <div class="form-group">
            <label for="inputNumber2" class="col-sm-3 control-label">当前纬度</label>
            <div class="col-sm-9">
              <input type="number" class="form-control" id="inputNumber2" v-model="current_lat"
                     placeholder="请输入当前地址(纬度)">
            </div>
          </div>
          <div class="form-group">
            <label for="inputNumber3" class="col-sm-3 control-label">车速</label>
            <div class="col-sm-9">
              <input type="number" class="form-control" id="inputNumber3" v-model="speed" required placeholder="请输入车速">
            </div>
          </div>
          <div class="form-group">
            <label for="inputNumber4" class="col-sm-3 control-label">行驶状态</label>
            <div class="col-sm-9">
              <input type="number" class="form-control" id="inputNumber4" v-model="state" placeholder="请输入行驶状态(-1,0,1)">
            </div>
          </div>
          <div class="form-group">
            <div class="col-sm-offset-3 col-sm-9">
              <router-link to="/Lorrys"><a class="btn btn-default" @click="saveData()">保存</a></router-link>
              <router-link to="/Lorrys"><a class="btn btn-default">取消</a></router-link>
            </div>
          </div>
        </form>

      </div>
    </div>
  </div>
</template>
<script>

  export default {
    name: 'newLorry',
    data () {
      return {
        code: this.$store.state.update_car.code,
        start:　this.$store.state.update_car.start,
        end: this.$store.state.update_car.end,
        current_lng:this.$store.state.update_car.current_lng,
        current_lat: this.$store.state.update_car.current_lat,
        speed: this.$store.state.update_car.speed,
        state: this.$store.state.update_car.state,

        ref: this.ref()
      }
    },
    mounted: function () {

    },
    methods: {
      saveData: function () {
        this.ref.child(this.code).set({
          "code": this.code,
          "start": this.start,
          "end": this.end,

          "current": this.current,
          "current_lng": this.current_lng,
          "current_lat": this.current_lat,

          "amount_time": this.amount_time,
          "overplus_time": this.overplus_time,
          "speed": this.speed,

          "state": this.current_state
        });
      }

    },
    computed: {

      current: function () {
        // 计算当前位置，通过"current_lng": ,"current_lat"这两个字段
        return (this.current_lng && this.current_lat) ? "当前位置" : this.start;
      },
      amount_time: function () {
        // 计算全程所用时间，通过速度以及全程路程计算
        return "00:00:00";
      },
      overplus_time: function () {
        // 计算全程所用时间，通过速度以及剩余路程计算
        return "00:00:00";
      },
      current_state: function () {
        if (this.state == -1) {
          return "故障报修";
        } else if (this.state == 1) {
          return "正常行驶";
        } else {
          return "熄火";
        }
      },
    },
    watch: {
        "$store.state.update_car": {
          handler: function () {
              this.code = this.$store.state.update_car.code;
              this.start =　this.$store.state.update_car.start;
              this.end = this.$store.state.update_car.end;
              this.current_lng = this.$store.state.update_car.current_lng;
              this.current_lat = this.$store.state.update_car.current_lat;
              this.speed = this.$store.state.update_car.speed;
              this. state = this.$store.state.update_car.state;
          },
          deep: true
        }
    }

  }

</script>
<style>
  #newLorry {
    position: relative;
    top: 4px;
  }
</style>
