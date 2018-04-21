<template>
  <el-row type="flex" class="row-bg">
    <el-button v-for="widget in filterWidgets" size="medium" type="text" :key="widget.label" :icon="'ion-' + widget.icon" @click="open">&nbsp;{{widget.label}}</el-button>
    <el-dialog title="收货地址" :visible.sync="dialogVisible" :modal="false">
      <dialog-form></dialog-form>
    </el-dialog>
  </el-row>
</template>

<script>

import {getAjax} from '../../service/util'
const DialogForm = resolve => require(['@/components/forms/DialogForm'], resolve)

export default {
  name: 'ToolBox',
  data() {
      return {
        dialogVisible: false,
        view:{},
        widgets:[]
      };
  },
  created(){
    let _this = this;
    if(!!_this.view){
      EventBus.$on('setView',function(data){
        _this.view = data;
      });
    }
    _this.loadWidgets();
  },
  computed: {
      filterWidgets: function () {
          let t_widgets = this.widgets;
          return t_widgets.filter(function (item) {
              return item.visible
          });
      }
  },
  methods: {
      loadWidgets(){
        let _this = this;
        getAjax('../../static/mock/toolBox.json')
          .then((response) => {
            console.log("请求到的工具箱数据是");
            console.log(response.data);
            _this.widgets = response.data || [];
          })
          .catch((error) => {
            console.error(error);
          });
      },
      open(type) {
        if(!!type){
          let _this = this;
          _this.dialogVisible = true;
        }else{
          _this.showMessage("请求类型错误，请注意");
        }
      },
      showMessage(msg){
        this.$message({
          showClose: true,
          message: msg
        });
      }
  },
  components:{
    DialogForm
  }
}
</script>

<style lang="scss" scoped>
$linear-start:#1861d5;//高亮效果的渐变开始颜色
$linear-end:#3080fe;//高亮效果的渐变结束颜色

$font_color: #666;; //
$clear_color: #fff;; //

// .row-bg{
//   background-color: $linear-start;
// }
.el-button+.el-button {
  margin-left: 0;
}
.el-button {
  margin-left: 0;
  background-color: transparent;
  color: $font_color;
}

.el-button.selected,.el-button:hover {
  background-image: linear-gradient(90deg,$linear-start 0,$linear-end 100%);
  color:$clear_color;
}

.el-button--medium, .el-button--medium.is-round {
  padding: 10px;
  font-size: 14px;
  word-spacing: 0.2em;
  border:0 none;
}
</style>
