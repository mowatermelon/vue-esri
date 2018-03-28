<template>
  <el-row>
    <el-col :span="18" class="h1">
      <i class="el-icon-menu"></i>
      <span>watermelon esri</span>
    </el-col>
    <el-col :span="3">
      <i class="el-icon-setting"></i>
      {{uName}}<br/>研发部
    </el-col>
    <el-col :span="3">
      <el-button type="primary" icon="el-icon-edit" @click="loginOut">退出</el-button>
    </el-col>
  </el-row>
  <!-- <span v-for='(type,index) in themeType' :key='index' @click="changeTheme(type)" class="badge" :class="'theme-'+type">{{index}}</span>&nbsp;&nbsp; -->
</template>

<script>
const crypto = require('crypto');

export default {
  name: 'Vheader',
  data () {
    return {
      changeType:'',
      themeType:['blue','pure','dark']
    }
  },
  computed: {
    uName () {
      return this.aesDecrypt(this.$store.state.userName,'UName');
    }
  },
  methods: {
    changeTheme(type){
      console.log('checkTheme：'+type);
      let _this = this;
      _this.$store.commit('setTheme',type);
    },
    goDashboard(){
      console.log('goDashboard');
    },
    goSetting(){
      console.log('goSetting');
    },
    loginOut(){
      let _this = this;
      _this.$store.commit('checkLogin',true);
      // _this.$router.push({path: '/'});
      console.log('loginOut');
    },
    aesDecrypt(encrypted, key) {
        const decipher = crypto.createDecipher('aes192', key);
        var decrypted = decipher.update(encrypted, 'hex', 'utf8');
        decrypted += decipher.final('utf8');
        return decrypted;
    }
  }
}
</script>
<style lang="scss" scoped>
$slogan_size:4rem;
$slogan_padding:1rem;

.navbar-header{
  .glyphicon.glyphicon-globe{
    font-size:$slogan_size;
  }
}
.mo-text{
  display: inline-block;
  margin: 0;
  vertical-align: top;
  cursor: pointer;
}

</style>
