<template>
  <el-row>
    <el-col :span="21" class="header-title">
      <i class="ion-earth"></i>
      <span>LOGO</span>
    </el-col>
    <el-col :span="1" class="header-colorpick">
      <el-color-picker v-model="themeColor" @change="getChangeColor"></el-color-picker>
    </el-col>
    <el-col :span="2">
      <el-dropdown @command="handleCommand">
        <el-button type="text">
          <el-col :span="10">
            <div class="user-avatar">
              <i class="ion-person"></i>
            </div>
          </el-col>
          <el-col :span="10" class="avatar-line">
            {{uName}}<br/>研发部
          </el-col>
          <el-col :span="4" class="avatar-line">
            <i class="el-icon-arrow-down el-icon--right"></i>
          </el-col>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item class="icon-content" :command="item.exec" v-for="item in btngroup" :key="item.content" :divided="item.divided"><i :class="'ion-'+item.icon"></i>&nbsp;{{item.content}}</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-col>
  </el-row>
</template>

<script>
import crypto from 'crypto'

export default {
  name: 'TopBar',
  data () {
    return {
      changeType:'',
      themeColor:this.$store.state.themeColor,
      btngroup:[
        {
          content:'我的主页',
          icon:'ios-person',
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
      this.$root.$router.push({path: '/Main/Default', query: { req: 'goDashboard' }});
      this.$message.warning("进入主界面");
    },
    goSetting(){
      console.log('goSetting');
      this.$root.$router.push({path: '/Main/Manage', query: { req: 'goSetting' }});
      this.$message.warning("进入管理界面");
    },
    loginOut(){
      let _this = this;
      _this.$router.push({path: '/Login'});
      console.log('loginOut');
    },
    getChangeColor(color){
      let _this = this;
      _this.$store.commit('setTheme',color);
      this.$message('当前选择颜色是'+color);
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
$user-avatar-width:40px;
$user-avatar-height:40px;
$user-avatar-radius:17%;
$header-height:60px;

.header-title{
  line-height: $header-height;
  font-size: $header-height*0.75;
  color:#3080FE;
}
.header-colorpick{
  margin-top: 10px;
}
.user-avatar{
  display: inline-block;
  overflow: hidden;
  width: $user-avatar-width;
  height: $user-avatar-height;
  font-size: $user-avatar-width*0.75;
  line-height: $user-avatar-height;
  background-color: #bebebe;
  color:#fff;
  border-radius: $user-avatar-radius;
}
.avatar-line{
  line-height: $user-avatar-height/2;
  i{
    line-height: $user-avatar-height;
  }
}
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
