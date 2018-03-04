<!--左侧面板信息-->
<template>
  <div class="mo-oa-leftbar">
    <div class="panel panel-oa" v-for="(tab, tindex) in Tabs" >
      <div class="panel-heading">
        <h4 class="panel-title">
          <span data-toggle="collapse" :data-href="'#tab'+tindex" @click="developTab(tindex, tab.view)">
            <i class="glyphicon" :class="'glyphicon-'+tab.icon"></i>&nbsp;&nbsp;&nbsp;&nbsp;{{tab.title}}
            <i class="glyphicon glyphicon-menu-down pull-right"></i>
            
          </span>
        </h4>
      </div>
      <div :id="'tab'+tindex" class="panel-collapse collapse"  :class="{'in': isHover == tindex}">
        <div class="panel-body">
          <ul class="list-group">
            <li class="list-group-item" v-for="(list, lindex) in tab.content">
              <router-link :to="list.link" class="mo-text" ><i class="glyphicon" :class="'glyphicon-'+list.icon"></i>&nbsp;&nbsp;&nbsp;&nbsp;{{tindex+1}}--{{list.text}}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <mo-footer></mo-footer>
  </div>
</template>
<script>

import Hello from './Hello'
import Overall from './Overall'
import Lorrys from './Lorrys'
import NewLorry from './NewLorry'
import moFooter from './footer'

export default {
    name: 'leftbar',
    data() {
      return {
        isHover: 0,// tab_active样式
        currentView: '',// 切换组件
        Tabs: [
          {
            title:'西瓜面板一',
            icon:'dashboard',
            content:
              [
                {text: "欢迎面板", link:"/Hello",icon:'gift', view: "Hello"},
                {text: "地图面板", link:"/Overall",icon:'leaf', view: "Overall"},
                {text: "查询面板1", link:"/Lorrys",icon:'fire', view: "Lorrys"},
                {text: "查询面板2", link:"/Lorrys",icon:'eye-open', view: "NewLorry"}
              ]
          },
          {
            title:'西瓜面板二',
            icon:'dashboard',
            content:
              [
                {text: "欢迎面板", link:"/Hello",icon:'plane', view: "Hello"},
                {text: "地图面板", link:"/Overall",icon:'random', view: "Overall"},
                {text: "查询面板1", link:"/Lorrys",icon:'magnet', view: "Lorrys"},
                {text: "查询面板2", link:"/Lorrys",icon:'certificate', view: "NewLorry"}
              ]
          },
          {
            title:'西瓜面板三',
            icon:'dashboard',
            content:[
              {text: "欢迎面板", link:"/Hello",icon:'briefcase', view: "Hello"},
              {text: "地图面板", link:"/Overall",icon:'paperclip', view: "Overall"},
              {text: "查询面板1", link:"/Lorrys",icon:'flash', view: "Lorrys"},
              {text: "查询面板2", link:"/Lorrys",icon:'record', view: "NewLorry"}
            ]
          },
          {
            title:'西瓜面板四',
            icon:'dashboard',            
            content:[
              {text: "欢迎面板", link:"/Hello",icon:'send', view: "Hello"},
              {text: "地图面板", link:"/Overall",icon:'cutlery', view: "Overall"},
              {text: "查询面板1", link:"/Lorrys",icon:'stats', view: "Lorrys"},
              {text: "查询面板2", link:"/Lorrys",icon:'tree-deciduous', view: "NewLorry"}
            ]
          }
        ]
      }
    },
    methods: {
      developTab: function(ind, view) {
        this.currentView = view;
        this.isHover = ind;
      },
      closeLi: function() {
        this.currentView = '';
        this.isHover = -1;
      }
    },
    components:{
      Hello,
      Overall,
      Lorrys,
      NewLorry,
      moFooter
    }

  }
</script>
<style>

</style>
