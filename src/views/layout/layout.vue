<template>
  <div class="app-wrapper" :class="classObj">
    <!--<div class="drawer-bg"></div>-->
    <!--sidebar-container-->
    <div class="sidebar-container el-scrollbar">
      <ty-menu></ty-menu>
    </div>
    <!--sidebar-container-->
    <div class="main-container">
      <el-container>
        <!--header-->
        <el-header>
          <div class="flex-container">
            <div class="floashow-tyMeun" :class="{'is-active':isActive}" @click="toggleSideBar"><i class="fa fa-list fa-2x" aria-hidden="true"></i></div>
            <div class="flex-item">
              <el-row :gutter="10">
                <el-col :xs="0" :sm="12" :md="12" :lg="15" :xl="15" class="hidden-xs-only"><div class="marquee"><marquee><span style="font-size: 16px; color: #333;">欢迎来到宇创社区！!</span></marquee></div></el-col>
                <el-col :xs="12" :sm="6" :md="4" :lg="4" :xl="5">
                  <div class="float-right" style="display: flex; min-height: 1px;">
                    <transition name="el-zoom-in-center">
                      <div v-show="showSearch" class="transition-box">
                        <el-input
                          placeholder="请输入内容"
                          v-model="search"
                          clearable>
                        </el-input></div>
                    </transition>
                  </div>
                </el-col>
                <el-col :xs="12" :sm="8" :md="8" :lg="5" :xl="4">
                  <div class="link-box float-right">
                    <a @click="showSearch = !showSearch" class="fs-18"><i class="el-icon-search fs-20"></i></a>
                    <a class="lnk-login" href="javascript:;" @click="dialogFormVisible = true" rel="">登录</a>
                    <a class="lnk-reg" href="javasript:;" rel="">注册</a>
                  </div>
                </el-col>
              </el-row>
            </div>
          </div>
        </el-header>
        <!--header-->
        <!--main-->
        <router-view></router-view>
        <!--main-->
        <!--footer-->
        <ty-footer></ty-footer>
        <!--footer-->
      </el-container>
    </div>
  </div>
</template>

<script>
  import tyMenu from '@/components/tyMenu'
  import tyFooter from '@/components/tyFooter'
  import { mapGetters } from 'vuex'
  export default {
    name: 'layout',
    components: {
      'ty-menu': tyMenu,  // add common ,
      'ty-footer': tyFooter
    },
    data () {
      return {
        activeIndex: '1',
        search: '',
        msg: '',
        activeLive: ['1'],
        activeHobby: ['1'],
        activeSkill: ['1'],
        activeCommunity: ['1'],
        showSearch: false,
        item:''
      }
    },
    computed: {
      ...mapGetters([
        'screenWidth',
        'isActive'
      ]),
      classObj() {
        console.log(this.screenWidth < 922 && this.isActive)
        return {
          hideSidebar: this.screenWidth < 922,
          withoutAnimation: this.screenWidth < 922,
          mobile: this.screenWidth < 922 && this.isActive
        }
      },
      newStyleClass () {
        return {
          myClass: true
        }
      }
    },
    methods: {
      handleSelect (e) {
        console.log(e)
      },
      handleChange (val) {
        console.log(val)
      },
      toggleSideBar() {
        this.$store.dispatch('ToggleSideBar')
      },
    },
    mounted () {

    }
  }
</script>

<style scoped>

</style>
<style>
  .banner-box{
    margin-bottom: 20px;
  }
  .news-box li{
    padding-bottom: 10px;
    border-bottom: 1px solid #e5e5e5;
  }
  .news-box li a{
    display: block;
  }
  .news-box h4{
    font-size: 18px;
    margin: 15px 0;
  }
  .news-box h4 span{
    padding: 6px;
    color: #ffffff;
    margin-right: 5px;
    display: inline-block;
    border-radius: 4px;
  }
  .news-box li p{
    color: #666666;
    line-height: 24px;
  }
  .news-box .author img{
    margin-right: 10px;
  }
  .news-box .user-eye{
    margin-right: 10px;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }
  .el-carousel__item h3 img{
    height: auto;
    max-height: 452px;
    min-width: 100%;
  }
  .hot-news h3{
    margin: 0;
    height: 60px;
    line-height: 60px;
    font-size: 18px;
    padding: 0 30px;
    background-color: #f4f4f4;
  }
  .hot-news ul{
    background: #ffffff;
    padding: 15px;
  }
  .hot-news ul li{
    margin-bottom: 16px;
  }
  .hot-news ul li span{
    display: inline-block;
    color: #ffffff;
    background: #aaaaaa;
    width: 24px;
    height: 24px;
    line-height: 24px;
    text-align: center;
    border-radius: 2px;
    margin-right: 10px;
  }
  .hot-news ul li:nth-child(1) span{
    background: #e9672e;
  }
  .hot-news ul li:nth-child(2) span{
    background: #e9972e;
  }
  .hot-news ul li:nth-child(3) span{
    background: #e9d12e;
  }
  .topic-list li{
    color: #999999;
    float: left;
    line-height: 26px;
  }
  .topic-list li:nth-child(1){
    margin-right: 15px;
  }
  .topic-list li:last-child{
    float: right;
  }
  .topic-list li:last-child span{
    color: #ffffff;
  }
  .topic-list li span{
    color: #333333;
  }
  .item-list{
    padding: 20px;
  }
  .live-active{
    margin-bottom: 20px;
  }
  .live-active .el-collapse-item__header{
    background: #f4f4f4;
    padding: 0 20px;
    font-size: 18px;
  }
  .el-collapse-item__content{
    padding-bottom: 0;
  }
  .item-list .el-row{
    margin-bottom: 20px;
  }
  .item-list .img-box{
    padding-top: 10px;
    width: 80px;
    height: 90px;
    overflow: hidden;
    margin-right: 15px;
  }
  .item-list .info-box h4 span{
    color: #ff7c7c;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
