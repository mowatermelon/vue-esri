<template>
  <div>
    <span v-if="!edit">{{value}}</span>
    <el-input placeholder="请输入内容" auto-complete="off" v-model="value" v-if="edit"></el-input>
    <el-button icon="el-icon-edit" circle @click="edit=true"></el-button>
    <el-button icon="el-icon-check" circle @click="edit=false"></el-button>
  </div>
</template>
<script>

export default {
  name: "EditInput",
  prop:{
    isEdit:{
      type: Boolean,
      default: false,
      required: true
    },
    editValue:{
      type: String,
      default: null,
      required: true
    }
  },
  data() {
    return {
      edit:this.isEdit,
      value:null
    };
  },
  watch:{
    isEdit: function(){
      this.edit = this.isEdit
    },
    editValue: function(){
      this.value = this.editValue
    }
  },
  components: {
  }
};
</script>

<style lang="scss">
</style>
