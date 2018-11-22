<template>
  <!--main-->
  <el-main>
    <el-card class="banner-box">
      <el-carousel trigger="click">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3><a href="javascript:;"><img src="../../assets/banner/banner01.jpg" alt=""></a></h3>
        </el-carousel-item>
      </el-carousel>
    </el-card>
    <el-row :gutter="30">
      <el-col :xs="24" :sm="24" :md="24" :lg="15" :xl="15" style="margin-bottom: 20px">
        <el-card shadow="always">
          <el-menu :default-active="activeIndex" class="el-menu-demo tab-news-menu" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1"><i class="el-icon-news"></i>最新推荐</el-menu-item>
            <el-menu-item index="2"><i class="el-icon-view"></i>每日一览</el-menu-item>
            <el-menu-item index="3"><i class="el-icon-edit-outline"></i>最新发布</el-menu-item>
          </el-menu>
          <div class="line"></div>
          <div class="news-box">
            <ul>
              <li>
                <a href="javascript:;">
                  <h4 class="h4 text-overflow-1"><span class="el-button--warning">荐</span><span class="el-button--primary">原</span>首届中国国际进口博览会蓄势待发，你有哪些期待？</h4>
                </a>
                <p>首届中国国际进口博览会将于11月5日至10日在国家会展中心（上海）举行，来自全球的家电、服饰、装备等产品将在这里聚集，吸引着国内外众多目光。首届中国国际进口博览会将带来哪些变化？</p>
                <div class="clearfix author">
                  <span class="float-left user-name text-999"><img  class="img-circle" src="../../assets/index/face.jpg" width="28" height="28" alt="约翰">约翰&nbsp;&nbsp;&nbsp;2018-11-07 17:20</span>
                  <span class="float-right user-eye text-999"><i class="el-icon-view"></i>阅读(254)</span>
                  <span class="float-right user-eye text-999"><i class="el-icon-edit"></i>评论(254)</span>
                  <span class="float-right user-eye text-999"><i class="el-icon-star-off"></i>点赞(254)</span>
                </div>
              </li>
              <li>
                <a href="javascript:;">
                  <h4 class="h4 text-overflow-1"><span class="el-button--warning">荐</span><span class="el-button--primary">原</span>首届中国国际进口博览会蓄势待发，你有哪些期待？</h4>
                </a>
                <p>首届中国国际进口博览会将于11月5日至10日在国家会展中心（上海）举行，来自全球的家电、服饰、装备等产品将在这里聚集，吸引着国内外众多目光。首届中国国际进口博览会将带来哪些变化？</p>
                <div class="clearfix author">
                  <span class="float-left user-name text-999"><img  class="img-circle" src="../../assets/index/face.jpg" width="28" height="28" alt="约翰">约翰&nbsp;&nbsp;&nbsp;2018-11-07 17:20</span>
                  <span class="float-right user-eye text-999"><i class="el-icon-view"></i>阅读(254)</span>
                  <span class="float-right user-eye text-999"><i class="el-icon-edit"></i>评论(254)</span>
                  <span class="float-right user-eye text-999"><i class="el-icon-star-off"></i>点赞(254)</span>
                </div>
              </li>
              <li>
                <a href="javascript:;">
                  <h4 class="h4 text-overflow-1"><span class="el-button--warning">荐</span><span class="el-button--primary">原</span>首届中国国际进口博览会蓄势待发，你有哪些期待？</h4>
                </a>
                <p>首届中国国际进口博览会将于11月5日至10日在国家会展中心（上海）举行，来自全球的家电、服饰、装备等产品将在这里聚集，吸引着国内外众多目光。首届中国国际进口博览会将带来哪些变化？</p>
                <div class="clearfix author">
                  <span class="float-left user-name text-999"><img  class="img-circle" src="../../assets/index/face.jpg" width="28" height="28" alt="约翰">约翰&nbsp;&nbsp;&nbsp;2018-11-07 17:20</span>
                  <span class="float-right user-eye text-999"><i class="el-icon-view"></i>阅读(254)</span>
                  <span class="float-right user-eye text-999"><i class="el-icon-edit"></i>评论(254)</span>
                  <span class="float-right user-eye text-999"><i class="el-icon-star-off"></i>点赞(254)</span>
                </div>
              </li>
            </ul>
          </div>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="9" :xl="9" style="margin-bottom: 20px">
          <div class="hot-news box-shadow border-radius-4">
            <h3 class="text-primary"><img src="../../assets/index/hot.png" width="19" height="23" alt="排行热帖">&nbsp;&nbsp;&nbsp;排行热帖</h3>
            <ul>
              <li><a href="javascript:;" class="text-overflow-1"><span>1</span>为了多购买一套房离婚再复婚</a></li>
              <li><a href="javascript:;" class="text-overflow-1"><span>2</span>为了多购买一套房离婚再复婚</a></li>
              <li><a href="javascript:;" class="text-overflow-1"><span>3</span>为了多购买一套房离婚再复婚</a></li>
              <li><a href="javascript:;" class="text-overflow-1"><span>4</span>为了多购买一套房离婚再复婚</a></li>
              <li><a href="javascript:;" class="text-overflow-1"><span>5</span>为了多购买一套房离婚再复婚</a></li>
              <li><a href="javascript:;" class="text-overflow-1"><span>6</span>为了多购买一套房离婚再复婚</a></li>
              <li><a href="javascript:;" class="text-overflow-1"><span>7</span>为了多购买一套房离婚再复婚</a></li>
              <li><a href="javascript:;" class="text-overflow-1"><span>8</span>为了多购买一套房离婚再复婚</a></li>
              <li><a href="javascript:;" class="text-overflow-1"><span>9</span>为了多购买一套房离婚再复婚</a></li>
              <li><a href="javascript:;" class="text-overflow-1"><span>10</span>为了多购买一套房离婚再复婚</a></li>
            </ul>
          </div>
      </el-col>
    </el-row>
    <el-card shadow="always" style="margin-bottom: 20px">
      <ul class="topic-list clearfix">
        <li><img src="../../assets/index/topic.png" width="26" height="26" alt="排行热帖"></li>
        <li>今日：<span>6702</span> <i class="el-breadcrumb__separator">|</i></li>
        <li>昨日：<span>87547</span><i class="el-breadcrumb__separator">|</i></li>
        <li>帖子：<span>26548700</span><i class="el-breadcrumb__separator">|</i></li>
        <li>会员：<span>87547</span></li>
        <li><el-button type="primary" round size="small">写帖子</el-button></li>
      </ul>
    </el-card>
    <el-collapse v-model="activeLive" @change="handleChange" class="box-shadow live-active">
      <el-collapse-item title="生活互动" name="1">
        <div class="item-list">
          <el-row :gutter="15">
            <el-col :xs="12" :sm="12" :md="12" :lg="8" :xl="8">
              <div class="clearfix">
                <div class="float-left img-box">
                  <img class="img-circle" src="../../assets/index/icon-tall.png" width="80" height="80" alt="生活杂谈">
                </div>
                <div class="float-left info-box">
                  <h4>生活杂谈 <span>(125)</span></h4>
                  <p class="text-666">主题：23万;帖数：320万</p>
                  <p class="text-666">最后发表：10秒前</p>
                </div>
              </div>
            </el-col>
            <el-col :xs="12" :sm="12" :md="12" :lg="8" :xl="8">
              <div class="clearfix">
                <div class="float-left img-box">
                  <img class="img-circle" src="../../assets/index/icon-news.png" width="80" height="80" alt="新闻快报">
                </div>
                <div class="float-left info-box">
                  <h4>新闻快报 <span>(125)</span></h4>
                  <p class="text-666">主题：23万;帖数：320万</p>
                  <p class="text-666">最后发表：10秒前</p>
                </div>
              </div>
            </el-col>
            <el-col :xs="12" :sm="12" :md="12" :lg="8" :xl="8">
              <div class="clearfix">
                <div class="float-left img-box">
                  <img class="img-circle" src="../../assets/index/icon-girl-boy.png" width="80" height="80" alt="单身男女">
                </div>
                <div class="float-left info-box">
                  <h4>单身男女 <span>(125)</span></h4>
                  <p class="text-666">主题：23万;帖数：320万</p>
                  <p class="text-666">最后发表：10秒前</p>
                </div>
              </div>
            </el-col>
            <el-col :xs="12" :sm="12" :md="12" :lg="8" :xl="8">
              <div class="clearfix">
                <div class="float-left img-box">
                  <img class="img-circle" src="../../assets/index/icon-fool.png" width="80" height="80" alt="美食广场">
                </div>
                <div class="float-left info-box">
                  <h4>美食广场 <span>(125)</span></h4>
                  <p class="text-666">主题：23万;帖数：320万</p>
                  <p class="text-666">最后发表：10秒前</p>
                </div>
              </div>
            </el-col>
            <el-col :xs="12" :sm="12" :md="12" :lg="8" :xl="8">
              <div class="clearfix">
                <div class="float-left img-box">
                  <img class="img-circle" src="../../assets/index/icon-pet.png" width="80" height="80" alt="宠物吧">
                </div>
                <div class="float-left info-box">
                  <h4>新闻快报 <span>(125)</span></h4>
                  <p class="text-666">主题：23万;帖数：320万</p>
                  <p class="text-666">最后发表：10秒前</p>
                </div>
              </div>
            </el-col>
            <el-col :xs="12" :sm="12" :md="12" :lg="8" :xl="8">
              <div class="clearfix">
                <div class="float-left img-box">
                  <img class="img-circle" src="../../assets/index/icon-travel.png" width="80" height="80" alt="我爱旅游">
                </div>
                <div class="float-left info-box">
                  <h4>单身男女 <span>(125)</span></h4>
                  <p class="text-666">主题：23万;帖数：320万</p>
                  <p class="text-666">最后发表：10秒前</p>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-collapse-item>
    </el-collapse>
    <el-collapse v-model="activeHobby" @change="handleChange" class="box-shadow live-active">
      <el-collapse-item title="娱乐爱好" name="1">
        <div class="item-list">
          <el-row :gutter="15">
            <el-col :xs="12" :sm="12" :md="12" :lg="8" :xl="8">
              <div class="clearfix">
                <div class="float-left img-box">
                  <img class="img-circle" src="../../assets/index/icon-photo.png" width="80" height="80" alt="摄影交流">
                </div>
                <div class="float-left info-box">
                  <h4>摄影交流 <span>(125)</span></h4>
                  <p class="text-666">主题：23万;帖数：320万</p>
                  <p class="text-666">最后发表：10秒前</p>
                </div>
              </div>
            </el-col>
            <el-col :xs="12" :sm="12" :md="12" :lg="8" :xl="8">
              <div class="clearfix">
                <div class="float-left img-box">
                  <img class="img-circle" src="../../assets/index/icon-car.png" width="80" height="80" alt="汽车交流">
                </div>
                <div class="float-left info-box">
                  <h4>汽车交流 <span>(125)</span></h4>
                  <p class="text-666">主题：23万;帖数：320万</p>
                  <p class="text-666">最后发表：10秒前</p>
                </div>
              </div>
            </el-col>
            <el-col :xs="12" :sm="12" :md="12" :lg="8" :xl="8">
              <div class="clearfix">
                <div class="float-left img-box">
                  <img class="img-circle" src="../../assets/index/icon-art.png" width="80" height="80" alt="文学天地">
                </div>
                <div class="float-left info-box">
                  <h4>文学天地 <span>(125)</span></h4>
                  <p class="text-666">主题：23万;帖数：320万</p>
                  <p class="text-666">最后发表：10秒前</p>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-collapse-item>
    </el-collapse>
    <el-collapse v-model="activeSkill" @change="handleChange" class="box-shadow live-active">
      <el-collapse-item title="前沿技术" name="1">
        <div class="item-list">
          <el-row :gutter="15">
            <el-col :xs="12" :sm="12" :md="12" :lg="8" :xl="8">
              <div class="clearfix">
                <div class="float-left img-box">
                  <img class="img-circle" src="../../assets/index/icon-ai.png" width="80" height="80" alt="人工智能">
                </div>
                <div class="float-left info-box">
                  <h4>人工智能 <span>(125)</span></h4>
                  <p class="text-666">主题：23万;帖数：320万</p>
                  <p class="text-666">最后发表：10秒前</p>
                </div>
              </div>
            </el-col>
            <el-col :xs="12" :sm="12" :md="12" :lg="8" :xl="8">
              <div class="clearfix">
                <div class="float-left img-box">
                  <img class="img-circle" src="../../assets/index/icon-data.png" width="80" height="80" alt="大数据">
                </div>
                <div class="float-left info-box">
                  <h4>大数据 <span>(125)</span></h4>
                  <p class="text-666">主题：23万;帖数：320万</p>
                  <p class="text-666">最后发表：10秒前</p>
                </div>
              </div>
            </el-col>
            <el-col :xs="12" :sm="12" :md="12" :lg="8" :xl="8">
              <div class="clearfix">
                <div class="float-left img-box">
                  <img class="img-circle" src="../../assets/index/icon-chain.png" width="80" height="80" alt="区块链">
                </div>
                <div class="float-left info-box">
                  <h4>区块链 <span>(125)</span></h4>
                  <p class="text-666">主题：23万;帖数：320万</p>
                  <p class="text-666">最后发表：10秒前</p>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-collapse-item>
    </el-collapse>
    <el-collapse v-model="activeCommunity" @change="handleChange" class="box-shadow live-active">
      <el-collapse-item title="谈天说地" name="1">
        <div class="item-list">
          <el-row :gutter="15">
            <el-col :xs="12" :sm="12" :md="12" :lg="8" :xl="8">
              <div class="clearfix">
                <div class="float-left img-box">
                  <img class="img-circle" src="../../assets/index/icon-second-hand.png" width="80" height="80" alt="二手市场">
                </div>
                <div class="float-left info-box">
                  <h4>二手市场 <span>(125)</span></h4>
                  <p class="text-666">主题：23万;帖数：320万</p>
                  <p class="text-666">最后发表：10秒前</p>
                </div>
              </div>
            </el-col>
            <el-col :xs="12" :sm="12" :md="12" :lg="8" :xl="8">
              <div class="clearfix">
                <div class="float-left img-box">
                  <img class="img-circle" src="../../assets/index/icon-advertise.png" width="80" height="80" alt="招聘求职">
                </div>
                <div class="float-left info-box">
                  <h4>招聘求职 <span>(125)</span></h4>
                  <p class="text-666">主题：23万;帖数：320万</p>
                  <p class="text-666">最后发表：10秒前</p>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-collapse-item>
    </el-collapse>
  </el-main>
  <!--main-->
</template>

<script>
import tyMenu from '@/components/tyMenu'
import tyFooter from '@/components/tyFooter'
export default {
  name: 'home',
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
    handleSelect (e) {
      console.log(e)
    },
    handleChange (val) {
      console.log(val)
    }
  }
}
</script>

<style scoped>
  @media only screen and (max-width: 768px){
    .tab-news-menu li{
      padding: 0;
      width: 33.33%;
      text-align: center;
    }
    .author{
      display: none;
    }
    .item-list{
      padding: 15px;
    }
    .item-list .img-box{
      display: none;
    }
  }
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
