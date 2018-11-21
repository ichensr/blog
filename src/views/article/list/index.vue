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
        <div class="float-right">
          <el-button type="primary" icon="el-icon-plus">发表帖子</el-button>
        </div>
      </div>
      <el-row :gutter="30">
        <el-col :xs="24" :sm="24" :md="16" :lg="17" :xl="18">
          <div class="article-list box-shadow clearfix">
            <el-tabs v-model="activeName" @tab-click="handleClick">
              <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
              <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
              <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
              <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
            </el-tabs>
            <div class="select-screen">
              <el-select v-model="value4" clearable placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
            <div class="article-item">
              <el-row :gutter="20">
                <el-col :xs="18" :sm="18" :md="18" :lg="18" :xl="18">
                  <a href="javascript:;">
                    <h4 class="h4 text-overflow-1"><span class="el-button--warning">荐</span><span class="el-button--primary">原</span>首届中国国际进口博览会蓄势待发，你有哪些期待？</h4>
                  </a>
                  <p class="text-overflow-3">首届中国国际进口博览会将于11月5日至10日在国家会展中心（上海）举行，来自全球的家电、服饰、装备等产品将在这里聚集，吸引着国内外众多目光。首届中国国际进口博览会将带来哪些变化？</p>
                  <div class="clearfix author">
                    <span class="float-left user-name text-999"><img  class="img-circle" src="../../../assets/index/face.jpg" width="28" height="28" alt="约翰">约翰&nbsp;&nbsp;&nbsp;2018-11-07 17:20</span>
                    <span class="float-right user-eye text-999"><i class="el-icon-view"></i>阅读(254)</span>
                    <span class="float-right user-eye text-999"><i class="el-icon-edit"></i>评论(254)</span>
                    <span class="float-right user-eye text-999"><i class="el-icon-star-off"></i>点赞(254)</span>
                  </div>
                </el-col>
                <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6">
                  <a href="javascript:;" class="list-img scale-img" title=""><img src="../../../assets/article-list01.jpg" width="auto" height="auto"  alt=""></a>
                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :xs="18" :sm="18" :md="18" :lg="18" :xl="18">
                  <a href="javascript:;">
                    <h4 class="h4 text-overflow-1"><span class="el-button--warning">荐</span><span class="el-button--primary">原</span>首届中国国际进口博览会蓄势待发，你有哪些期待？</h4>
                  </a>
                  <p class="text-overflow-3">首届中国国际进口博览会将于11月5日至10日在国家会展中心（上海）举行，来自全球的家电、服饰、装备等产品将在这里聚集，吸引着国内外众多目光。首届中国国际进口博览会将带来哪些变化？</p>
                  <div class="clearfix author">
                    <span class="float-left user-name text-999"><img  class="img-circle" src="../../../assets/index/face.jpg" width="28" height="28" alt="约翰">约翰&nbsp;&nbsp;&nbsp;2018-11-07 17:20</span>
                    <span class="float-right user-eye text-999"><i class="el-icon-view"></i>阅读(254)</span>
                    <span class="float-right user-eye text-999"><i class="el-icon-edit"></i>评论(254)</span>
                    <span class="float-right user-eye text-999"><i class="el-icon-star-off"></i>点赞(254)</span>
                  </div>
                </el-col>
                <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6">
                  <a href="javascript:;" class="list-img scale-img" title=""><img src="../../../assets/article-list01.jpg" width="auto" height="auto"  alt=""></a>
                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :xs="18" :sm="18" :md="18" :lg="18" :xl="18">
                  <a href="javascript:;">
                    <h4 class="h4 text-overflow-1" title="首届中国国际进口博览会蓄势待发"><span class="el-button--warning">荐</span><span class="el-button--primary">原</span>首届中国国际进口博览会蓄势待发，你有哪些期待？</h4>
                  </a>
                  <p class="text-overflow-3">首届中国国际进口博览会将于11月5日至10日在国家会展中心（上海）举行，来自全球的家电、服饰、装备等产品将在这里聚集，吸引着国内外众多目光。首届中国国际进口博览会将带来哪些变化？</p>
                  <div class="clearfix author">
                    <span class="float-left user-name text-999"><img  class="img-circle" src="../../../assets/index/face.jpg" width="28" height="28" alt="约翰">约翰&nbsp;&nbsp;&nbsp;2018-11-07 17:20</span>
                    <span class="float-right user-eye text-999"><i class="el-icon-view"></i>阅读(254)</span>
                    <span class="float-right user-eye text-999"><i class="el-icon-edit"></i>评论(254)</span>
                    <span class="float-right user-eye text-999"><i class="el-icon-star-off"></i>点赞(254)</span>
                  </div>
                </el-col>
                <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6">
                  <a href="javascript:;" class="list-img scale-img" title=""><img src="../../../assets/article-list01.jpg" width="auto" height="auto"  alt=""></a>
                </el-col>
              </el-row>
            </div>
            <div class="box-pagination">
              <el-pagination
                background
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage4"
                :page-sizes="[5, 10, 20, 30]"
                :page-size="10"
                layout="total, sizes, prev, pager, next, jumper"
                :total="30">
              </el-pagination>
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="8" :lg="7" :xl="6">
          <el-row :gutter="30">
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
              <div class="el-card__body box-shadow bg-white">
                <h3>公告</h3>
                <div class="noice">
                  <p class="text-666">首届中国国际进口博览会将于11月5日至10日在国家会展中心（上海）举行，来自全球的家电、服饰、装备等产品将在这里聚集，吸引着国内外众多目光。</p>
                  <p style="text-align: center"><img src="../../../assets/erwei.png" width="146" height="144" alt=""></p>
                </div>
              </div>
            </el-col>
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
              <div class="el-card__body box-shadow bg-white">
                <h3>所有版块</h3>
                <div class="all-plate">
                  <el-row :gutter="0">
                    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                      <h4>生活互动</h4>
                      <ul class="clearfix">
                        <li><a href="javascript:;">生活杂谈</a></li>
                        <li><a href="javascript:;">新闻快报</a></li>
                        <li><a href="javascript:;">单身男女</a></li>
                        <li><a href="javascript:;">美食广场</a></li>
                        <li><a href="javascript:;">宠物吧</a></li>
                        <li><a href="javascript:;">我爱旅游</a></li>
                      </ul>
                    </el-col>
                    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                      <h4>娱乐爱好</h4>
                      <ul class="clearfix">
                        <li><a href="javascript:;">摄影交流</a></li>
                        <li><a href="javascript:;">汽车交流</a></li>
                        <li><a href="javascript:;">文学天地</a></li>
                        <li><a href="javascript:;">生活杂谈</a></li>
                      </ul>
                    </el-col>
                    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                      <h4>前沿技术</h4>
                      <ul class="clearfix">
                        <li><a href="javascript:;">人工智能</a></li>
                        <li><a href="javascript:;">区块链</a></li>
                        <li><a href="javascript:;">大数据</a></li>
                        <li><a href="javascript:;">生活杂谈</a></li>
                      </ul>
                    </el-col>
                    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                      <h4>谈天说地</h4>
                      <ul class="clearfix">
                        <li><a href="javascript:;">二手市场</a></li>
                        <li><a href="javascript:;">照片求职</a></li>
                        <li><a href="javascript:;">生活杂谈</a></li>
                        <li><a href="javascript:;">生活杂谈</a></li>
                      </ul>
                    </el-col>
                  </el-row>
                </div>
              </div>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
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
      activeName: 'second',
      // 排序筛选
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value4: '排序方式',
      // 页码
      currentPage4: 4

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
    handleClick(tab, event) {
      console.log(tab, event);
    },
    // 页码
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
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
  .article-list{
    background: #ffffff;
    padding: 20px;
    position: relative;
  }
  .select-screen{
    position: absolute;
    right: 20px;
    top: 15px;
    width: 120px;
  }
  .select-screen .el-input__inner{
    border: none;
  }
  .el-row .el-col{
    margin-bottom: 20px;
  }
  .noice p:nth-child(1){
    padding-top: 15px;
    border-top: 1px solid #e5e5e5;
  }
  .all-plate {
    padding-top: 10px;
    border-top: 1px solid #e5e5e5;
  }
  .all-plate h4{
    padding-left: 15px;
    border-left: 4px solid #81cefa;
  }
  .all-plate ul li{
    float: left;
    width: 50%;
    padding-left: 15px;
    margin-bottom: 10px;
  }
  .all-plate ul li a{
    color: #999999;
  }
  .all-plate ul li a:hover{
    color: #81cefa;
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
  .article-item .list-img {
    display: block;
    text-align: right;
    margin-top: 15px;
    overflow: hidden;
  }
  .article-item .list-img img{
    max-width: 100%;
    height: 100%;
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
</style>

