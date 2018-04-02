<template>
  <el-row>
    <el-col :span="22" class="h1">
      <i class="ion-earth"></i>
      <span>watermelon esri</span>
    </el-col>
    <el-col :span="2">
      <el-dropdown @command="handleCommand">
        <el-button type="primary">
          {{uName}}-研发部<i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item :command="item.exec" v-for="item in btngroup" :key="item.content" :divided="item.divided"><i :class="'ion-'+item.icon"></i>{{item.content}}</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-col>
  </el-row>
</template>

<script>
import crypto from 'crypto'

export default {
  name: 'Vheader',
  data () {
    return {
      changeType:'',
      themeType:['blue','pure','dark'],
      btngroup:[
        {
          content:'我的主页',
          icon:'ios-person-outline',
          exec: 'goDashboard',
          divided:false
        },
        {
          content:'设置',
          icon:'gear-a',
          exec: 'goSetting',
          divided: false
        },
        {
          content:'退出',
          icon:'log-out',
          exec: 'loginOut',
          divided: true
        }
      ]
    }
  },
  computed: {
    uName () {
      return this.aesDecrypt(this.$store.state.userName,'UName');
    }
  },
  methods: {
    //绑定下拉按钮事件执行情况
    handleCommand(command){
      let _this = this;
      _this.$message('click on item ' + command);
      _this[command]();//执行每个按钮对应的事件
    },
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
