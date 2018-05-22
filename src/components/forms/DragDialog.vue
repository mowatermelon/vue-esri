<template>
    <!-- <el-dialog title="收货地址" :visible.sync="dialogVisible" :modal="false">
      <dialog-form></dialog-form>
    </el-dialog> -->
    <el-dialog v-dialogDrag ref="dialog__wrapper" :visible.sync="visible" :before-close="handleClose" :width.sync="width" :close-on-click-modal="closeOnClickModal" :fullscreen="isFullscreen">
      <div slot="title">
        <el-row type="flex">
          <el-col :sm="18" class="h4">{{title}}</el-col>
          <el-col :sm="5">
            <el-button icon="ion-md-contract" circle @click.stop.prevent="isFullscreen = false"></el-button>
            <el-button icon="ion-md-expand" circle @click.stop.prevent="isFullscreen = true"></el-button>
          </el-col>
        </el-row>

      </div>
      <div class="dialog-body">
        <dialog-form :dialogVisible="visible" @increment="closeDialog"></dialog-form>

        <el-row type="flex" justify="end" v-if="changeWidth">
          <el-col :span="1">
            <div class="text-right rotate-icon" v-dialogDragWidth="$refs.dialog__wrapper"><span class="ion-md-resize h3"></span></div>
          </el-col>
        </el-row>

      </div>
    </el-dialog>
</template>
<script>
// 引入自定义指令
import "../../assets/js/directives/modal-directives.js";
const DialogForm = resolve =>require(["@/components/forms/DialogForm"], resolve);

export default {
  name: "DragDialog",
  props:{
    dialogVisible:{
      type: Boolean,
      default: false,
      required: true
    },
    changeWidth:{
      type: Boolean,
      default: false
    },
    width:{
      type: String
    },
    title:{
      type: String,
      default: '请注意'
    },
    closeOnClickModal:{
      type: Boolean,
      default: false
    },
  },
  data() {
    return {
      visible: this.dialogVisible,
      isFullscreen:false
    };
  },
  watch:{
    dialogVisible: function(){
      this.visible = this.dialogVisible
    }
  },
  methods: {
    handleClose(done){
      let _this =this;
       _this.$confirm('确认关闭？')
        .then(_ => {
          _this.closeDialog(false);
          // done();
        })
        .catch(_ => {});
    },
    closeDialog(visible){
      this.$emit('increment', false);
      this.visible = visible;
    }
  },
  components: {
    DialogForm
  }
};
</script>

<style lang="scss" scoped>
.el-dialog__body{
  padding:15px;
}
.rotate-icon{
  transform:rotate(-135deg);
}
.el-button.is-circle {
  padding: 12px 13px;
}
</style>
