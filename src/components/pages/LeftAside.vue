<!--左侧面板信息-->
<template>
    <!-- <div class="panel panel-oa" v-for="(tab, tindex) in Tabs" :key='tindex' >
      <div class="panel-heading" @click="collapseTab(tindex)">
        <h4 class="panel-title">
          <span data-toggle="collapse" :data-href="'#tab'+tindex">
            <i class="glyphicon" :class="'glyphicon-'+tab.icon"></i><span class="mo-text">&nbsp;&nbsp;&nbsp;&nbsp;{{tab.title}}</span>
            <i class="glyphicon glyphicon-menu-down pull-right"></i>
          </span>
        </h4>
      </div>
      <div :id="'tab'+tindex" class="panel-collapse collapse" :class="{'in': isActive == tindex}">
        <div class="panel-body">
          <ul class="list-group">
            <router-link class="list-group-item" v-for="(list,lindex) in tab.content" :key='lindex' :to="{path:list.link,query: {tabIndex: tindex+1,listIndex:lindex+1}}" :class="{'active': isActiveList == (tindex+'--'+lindex)}" >
              <P class="mo-text" @click="goRouter(tindex,lindex)">
                <i class="glyphicon" :class="'glyphicon-'+list.icon"></i>
                <span class="mo-text">&nbsp;&nbsp;&nbsp;&nbsp;{{tindex+1}}--{{list.text}}</span>
              </P>
            </router-link>
          </ul>
        </div>
      </div>
    </div>
    <vfooter></vfooter> -->

  <el-menu :default-openeds="['1', '3']">
    <el-submenu index="1">
      <template slot="title"><i class="el-icon-message"></i>导航一</template>
      <el-menu-item-group>
        <template slot="title">分组一</template>
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="分组2">
        <el-menu-item index="1-3">选项3</el-menu-item>
      </el-menu-item-group>
      <el-submenu index="1-4">
        <template slot="title">选项4</template>
        <el-menu-item index="1-4-1">选项4-1</el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-submenu index="2">
      <template slot="title"><i class="el-icon-menu"></i>导航二</template>
      <el-menu-item-group>
        <template slot="title">分组一</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="分组2">
        <el-menu-item index="2-3">选项3</el-menu-item>
      </el-menu-item-group>
      <el-submenu index="2-4">
        <template slot="title">选项4</template>
        <el-menu-item index="2-4-1">选项4-1</el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-submenu index="3">
      <template slot="title"><i class="el-icon-setting"></i>导航三</template>
      <el-menu-item-group>
        <template slot="title">分组一</template>
        <el-menu-item index="3-1">选项1</el-menu-item>
        <el-menu-item index="3-2">选项2</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="分组2">
        <el-menu-item index="3-3">选项3</el-menu-item>
      </el-menu-item-group>
      <el-submenu index="3-4">
        <template slot="title">选项4</template>
        <el-menu-item index="3-4-1">选项4-1</el-menu-item>
      </el-submenu>
    </el-submenu>
  </el-menu>
</template>
<script>
const Hello = resolve => require(['@/pages/Hello'], resolve)
const Feature = resolve => require(['@/pages/Feature'], resolve)
import {getAjax} from '../../service/util'

export default {
    name: 'LeftAside',
    data() {
      return {
        isActive: 0,// 默认的tab数
        isActiveList: '0--0',// 默认激活的子面板编号
        Tabs: []
        }
    },
    props: {

    },
    methods: {
      collapseTab: function(ind) {
        this.isActive = ind;
      },
      goRouter: function(tabIndex,listIndex) {
        this.isActiveList = tabIndex+'--'+listIndex;
      }
    },
    components:{
      Hello,
      Feature
    },
  created:function(){
    let that = this;
    getAjax('../../static/mock/leftAsideData.json')
      .then((response) => {
        console.log("请求到的面板数据是");
        console.log(response.data);
        that.Tabs = response.data || [];
      })
      .catch((error) => {
        console.error(error);
      });
  }
  }
</script>
<style>

</style>
