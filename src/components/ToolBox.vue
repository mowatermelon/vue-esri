<template>
  <el-row type="flex" class="row-bg">
    <el-button v-for="widget in filterWidgets" plain size="medium" type="text" :key="widget.label" :icon="'ion-' + widget.icon" @click="open">&nbsp;{{widget.label}}</el-button>
  </el-row>
</template>

<script>

import {getAjax} from '../service/util'

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
      open() {
        this.$message({
          showClose: true,
          message: '恭喜你，这是一条成功消息',
          type: 'success'
        });
      }
  }
}
</script>

<style lang="scss" scoped>
$linear-start:#409EFF;//高亮效果的渐变开始颜色
$linear-end:#ecf5ff;//高亮效果的渐变结束颜色

$theme_color: #ecf5ff;; // 页面蓝色主题 --默认色

.row-bg{
  background-image: linear-gradient(90deg,$linear-start 0%,$theme_color 50%,$linear-end 100%);
}
.el-button+.el-button {
  margin-left: 0;
  background-color: transparent;
}
.el-button--medium, .el-button--medium.is-round {
  padding: 10px;
  font-size: 14px;
  word-spacing: 0.2em;
  border-radius: 0;
  border:0 none;
}
</style>
