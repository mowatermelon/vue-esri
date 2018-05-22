<template>
  <el-row type="flex" class="row-bg">
    <el-button v-for="widget in filterWidgets" size="medium" type="text" :key="widget.label" :icon="'ion-md-' + widget.icon" @click="open">&nbsp;{{widget.label}}</el-button>

    <el-dropdown @command="handleCommand">
      <el-button type="text">
        绘制图形<i class="el-icon-arrow-down el-icon--right"></i>
      </el-button>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item class="icon-content" :type="item.type" :command="item.exec" v-for="item in btngroups" :key="item.content" :divided="item.divided"><i :class="'ion-md-'+item.icon"></i>&nbsp;{{item.content}}</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <drag-dialog :dialogVisible="dialogVisible" @increment="closeDialog" title ="收货地址"></drag-dialog>
  </el-row>
</template>

<script>
import { getAjax } from "../../service/util";
const DragDialog = resolve =>
  require(["@/components/forms/DragDialog"], resolve);

export default {
  name: "ToolBox",
  data() {
    return {
      dialogVisible: false,
      view: {},
      widgets: [],
      btngroups: [
        {
          content: "添加标识",
          type: "point",
          icon: "bookmarks",
          exec: "addDraw",
          divided: false
        },
        {
          content: "添加lineSymbol",
          type: "polyline",
          icon: "cog",
          exec: "addDraw",
          divided: false
        },
        {
          content: "添加polygonSymbol",
          type: "polygon",
          icon: "logo-polymer",
          exec: "addDraw",
          divided: false
        },
        {
          content: "撤销绘制",
          type: "undo",
          icon: "undo",
          exec: "undoDraw",
          divided: true
        },
        {
          content: "重做绘制",
          type: "redo",
          icon: "redo",
          exec: "redoDraw",
          divided: false
        },
        // {
        //   content: "停止绘制",
        //   type: "clear",
        //   icon: "hand",
        //   exec: "stopDraw",
        //   divided: true
        // },
        {
          content: "清除绘制",
          type: "clear",
          icon: "trash",
          exec: "clearDraw",
          divided: false
        }
      ]
    };
  },
  created() {
    let _this = this;
    _this.loadWidgets();
  },
  computed: {
    filterWidgets: function() {
      let t_widgets = this.widgets;
      return t_widgets.filter(function(item) {
        return item.visible;
      });
    }
  },
  methods: {
    //绑定下拉按钮事件执行情况
    handleCommand(command, vm) {
      let _this = this;
      _this.$message(
        "click on item " + command,
        "click on type " + vm.$attrs.type
      );
      _this[command](vm.$attrs.type); //执行每个按钮对应的事件
    },
    loadWidgets() {
      let _this = this;
      getAjax("../../static/mock/toolBox.json")
        .then(response => {
          console.log("请求到的工具箱数据是");
          console.log(response.data);
          _this.widgets = response.data || [];
        })
        .catch(error => {
          console.error(error);
        });
    },
    addDraw(type) {
      let _this = this;
      this.showMessage("addDraw" + type);
      let tempArr = _this.$store.state.drawComponents || [];
      tempArr.push({
        component: "draw",
        drawType: type
      });
      _this.$store.commit("setDraw", tempArr);
    },
    clearDraw() {
      this.$store.state.view.graphics.removeAll();
      this.$store.commit("setDraw", []);
    },
    stopDraw() {
      window.draw.complete();
    },
    redoDraw() {
      if (window.action.canRedo()) {
        window.action.redo();
      }
    },
    undoDraw() {
      if (window.action.canUndo()) {
        window.action.undo();
      }
    },
    open(type) {
      if (!!type) {
        let _this = this;
        _this.$nextTick(function() {
          _this.dialogVisible = true;
        });
      } else {
        _this.showMessage("请求类型错误，请注意");
      }
    },
    showMessage(msg) {
      this.$message({
        showClose: true,
        message: msg
      });
    },
    closeDialog(visible) {
      this.dialogVisible = visible;
    }
  },
  components: {
    DragDialog
  }
};
</script>

<style lang="scss" scoped>
$linear-start: #1861d5; //高亮效果的渐变开始颜色
$linear-end: #3080fe; //高亮效果的渐变结束颜色

$font_color: #666; //
$clear_color: #fff; //

// .row-bg{
//   background-color: $linear-start;
// }
.el-button + .el-button {
  margin-left: 0;
}
.el-button {
  margin-left: 0;
  background-color: transparent;
  color: $font_color;
}

.el-button.selected,
.el-button:hover {
  background-image: linear-gradient(90deg, $linear-start 0, $linear-end 100%);
  color: $clear_color;
}

.el-button--medium,
.el-button--medium.is-round {
  padding: 10px;
  font-size: 14px;
  word-spacing: 0.2em;
  border: 0 none;
}
</style>
