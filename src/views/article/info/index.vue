<template>
    <!--<div class="drawer-bg"></div>-->
    <!--el-main-->
    <el-main>
      <div class="article-type-head clearfix box-shadow">
        <div class="clearfix" style="padding-top: 15px;">
          <div class="clearfix">
            <div class="float-left">
              <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item>首页</el-breadcrumb-item>
                <el-breadcrumb-item>活动管理</el-breadcrumb-item>
                <el-breadcrumb-item>活动列表</el-breadcrumb-item>
              </el-breadcrumb>
            </div>
            <div class="float-left" style="margin-left: 10px">
              <el-button  size="mini" type="primary" icon="el-icon-check" disabled="disabled">已关注</el-button>
              <el-button  size="mini" type="primary" icon="el-icon-plus">关注</el-button>
            </div>
          </div>
          <div class="article-item">
            <el-row :gutter="0">
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <a href="javascript:;">
                  <h4 class="h4 text-overflow-1">首届中国国际进口博览会蓄势待发，你有哪些期待？</h4>
                </a>
                <div class="clearfix author">
                  <span class="float-left user-name text-999"><img  class="img-circle" src="../../../assets/index/face.jpg" width="28" height="28" alt="约翰">约翰&nbsp;&nbsp;&nbsp;2018-11-07 17:20</span>
                  <span class="float-right user-eye text-999"><i class="el-icon-view"></i>阅读(254)</span>
                  <span class="float-right user-eye text-999"><i class="el-icon-edit"></i>评论(254)</span>
                  <span class="float-right user-eye text-999"><i class="el-icon-star-off"></i>点赞(254)</span>
                </div>
              </el-col>
            </el-row>
          </div>
        </div>
      </div>
      <div class="article-main bg-white box-shadow el-card__body">
        <h1>拯救文化遗产</h1>
        <p>优思建筑事务所设计的展览中心位于长治市，中国山西省的一个三线城市。目前在中国经济和城市转型热潮中，长治市也面临着城市郊区化，即将成为新的CBD。在这次设计中最大的挑战，不仅要让长治市焕然一新，同时也要保留住山西省仅存的几处工业时代老厂房。</p>
        <p><img src="../../../assets/article01.jpg" width="100%" height="auto" alt=""></p>
        <p>优思建筑负责长治市CBD的设计，而CBD的规划位置，恰好位于15座轴承厂房区域。这片厂区修建于1945年解放战争时期，有着70年之久的历史，是长治市极具文化价值和历史代表性的文化遗产。甲方于2011年通过拍卖成功地获得了这片土地。在当今经济压力下，甲方和当局计划了一个全新的城市发展方向，却忽视了遗留产物能带来的实际价值。优思建筑坚信，保护及重饰文化产物的形式与城市发展是可以并存的。为了说服甲方和政府保留老厂房，优思建筑借鉴和展示了国内与国际的一些成功案例，如北京798艺术园和1933上海屠宰场。甲方在文化遗产周边的开发区域，也会因此增值不少，与甲方的市场团队营销构想达成一致。实际上优思建筑说服了政府和甲方保留了至少70%的文化遗产，并成功的转型为“文化创意园”。作为“文化创意园”的一部分，优思建筑在老厂房的第一处也是最大规模的改造成果区域 —-“长治博览中心”，主要功能：展览中心，政府会议中心, 办公空间和大礼堂。</p>
        <div class="box-btn clearfix">
          <el-button type="warning"><i class="fa fa-heartbeat" aria-hidden="true"></i>点赞</el-button>
          <el-button type="primary" icon="el-icon-edit">评论</el-button>
        </div>
      </div>
    </el-main>
    <!--el-main-->
</template>

<script>
import tyMenu from '@/components/tyMenu'
import tyFooter from '@/components/tyFooter'
export default {
  name: 'article-list',
  data () {
    return {
      search: '',
      showSearch: false,

    }
  },
  computed: {
    classObj() {
      return {
        mobile: this.myWidth > 922
      }
    }
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

  .el-breadcrumb{
    margin-bottom: 20px;
  }
  .el-breadcrumb{
    font-size: 16px;
  }
  .article-item .el-row{
    border-bottom: 1px solid #e5e5e5;
  }
  .article-item h4{
    font-size: 16px;
    margin: 15px 0;
  }
  .article-item h4 span{
    padding: 6px;
    color: #ffffff;
    margin-right: 5px;
    display: inline-block;
    border-radius: 4px;
  }
  .article-item p{
    color: #666666;
    line-height: 24px;
  }
  .article-item .author img{
    margin-right: 10px;
  }
  .article-item .user-eye{
    margin-right: 10px;
  }
  .article-main h1{
    font-size: 18px;
    color: #333;
  }
  .article-main p{
    line-height: 32px;
    margin-bottom: 20px;
    font-size: 16px;
  }
  @media only screen and (max-width: 1200px) {
    .article-list{
      padding: 15px;
    }
  }
  @media only screen and (max-width: 768px) {
    .select-screen{
      display: none;
    }
  }
</style>
<style>
  .select-screen .el-input__inner{
    border: none;
  }
  .el-breadcrumb__inner,.el-breadcrumb__item:last-child .el-breadcrumb__inner{
    color: #999999;
  }
</style>

