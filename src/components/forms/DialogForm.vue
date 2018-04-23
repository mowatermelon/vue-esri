<template>
  <div>
    <el-form :model="form">
      <el-form-item label="活动名称" :label-width="formLabelWidth">
        <el-input v-model="form.name" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="活动区域" :label-width="formLabelWidth">
        <el-select v-model="form.region" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <div class="el-dialog__footer">
      <el-button @click="emitClose">取 消</el-button>
      <el-button type="primary" @click="emitClose">确 定</el-button>
    </div>
  </div>
</template>
<script>

export default {
  name: 'DialogForm',
  props:{
    dialogVisible:{
      type: Boolean,
      default: false,
      required: true
    }
  },
  data () {
    return {
      form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
      formLabelWidth: '120px',
      visible: this.dialogVisible
    }
  },
  methods:{
    emitClose(){
      this.$emit('increment', false);
    }
  }
}

</script>

<style lang="scss" scoped>
</style>
