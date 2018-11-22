<template>
    <!--<div class="drawer-bg"></div>-->
    <!--el-main-->
    <el-main>
      <div class="article-type-head clearfix box-shadow">
        <div class="float-left icon-chat"><img src="../../../assets/icon-square-chat.png" width="80" height="80" alt=""></div>
        <div class="float-left" style="padding-top: 15px;">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>首页</el-breadcrumb-item>
            <el-breadcrumb-item>活动管理</el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
          </el-breadcrumb>
          <p>在这里，有最全最新的生活资讯，有一群最懂生活的朋友。</p>
        </div>
      </div>

    </el-main>
    <!--el-main-->
</template>

<script>
import tyMenu from '@/components/tyMenu'
import tyFooter from '@/components/tyFooter'
export default {
  data () {
    return {

    }
  },
  computed: {

  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .article-type-head{
    padding: 15px 20px;
    background: #ffffff;
    position: relative;
    margin-bottom: 20px;
  }
  .icon-chat{
    margin-right: 15px;
  }
  .el-breadcrumb{
    margin-bottom: 20px;
  }
  .el-breadcrumb__inner{
    color: #333333;
  }
  .el-breadcrumb{
    font-size: 16px;
  }

</style>
<style>

</style>

