<template>
    <!-- <el-dialog title="收货地址" :visible.sync="dialogVisible" :modal="false">
      <dialog-form></dialog-form>
    </el-dialog> -->
    <el-dialog v-dialogDrag
    title="收货地址"
    ref="dialog__wrapper"
    :visible.sync="visible"
    :before-close="handleClose">
      <div class="dialog-body">
        <dialog-form :dialogVisible="visible" @increment="closeDialog"></dialog-form>

        <el-row type="flex" justify="end" v-if="changeWidth">
          <el-col :span="1">
            <div class="text-right rotate-icon" v-dialogDragWidth="$refs.dialog__wrapper"><span class="ion-arrow-resize h3"></span></div>
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
    }
  },
  data() {
    return {
      visible: false
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
          //  _this.visible = false;
          done();
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
</style>
