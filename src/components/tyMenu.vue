<template>
  <div class="container">
    <h1 class="logo"><img src="../assets/logo/logo.png" width="163" height="124" alt="天宇论坛"></h1>
    <el-scrollbar wrapClass="scrollbar-wrapper">
      <el-menu
        router
        default-active="defaultActive"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#333333"
        text-color="#999999"
        active-text-color="#ffffff">
        <el-menu-item index="1">
          <template slot="title">
            <span>论坛首页</span>
          </template>
        </el-menu-item>
        <el-menu-item v-for="m in menus" :index="m.path" @click="changeActive(m.path)">
          <span slot="title">{{m.title}}</span>
        </el-menu-item>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import { setStore, getStore } from "../utils"
export default {
  name: 'tyMenu',
  data () {
    return {
      defaultActive: '1',
      menus:[
        { path: '/article/list', title: '文章列表'},
        { path: '/index2', title: '导航san'},
        { path: '/index3', title: '导航si'},
        { path: '/index4', title: '导航wu '}
      ],
      screenWidth: document.body.clientWidth, // 屏幕尺寸
    }
  },
  methods: {
    ...mapActions ([
      'setScreenwidth'
    ]),
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    changeActive (path) {
      console.log(path)
      this.defaultActive = path
    },
    // const that = this
    // window.onresize = () => {
    // return (() => {
    //   window.screenWidth = document.body.clientWidth
    //   that.screenWidth = window.screenWidth
    // })()
    // window.onresize
  },
  mounted () {
    const that = this
    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth
        that.screenWidth = window.screenWidth
        setStore('screenWidth', that.screenWidth)
        that.setScreenwidth(that.screenWidth)
      })()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container{
    height: 100%;
    background: #333333;
  }
  .logo{
    margin: 0;
    padding: 20px;
    text-align: center;
    margin-bottom: 20px;
  }
  .el-menu-item, .el-submenu__title{
    text-align: center;
    height: 60px;
    line-height: 60px;
    font-size: 18px;
  }
</style>
