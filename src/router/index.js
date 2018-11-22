import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout/layout'
import Home from '@/views/home/home'
import Index from '@/views/index/index'
import Login from '@/views/login'
import Post from '@/views/post'
import ArticleList from '@/views/article/list'
import ArticleInfo from '@/views/article/info'
import ArticleCreate from '@/views/article/create'
import PersonUser from '@/views/personal/expressList'
import PersonReply from '@/views/personal/replyList'
import PersonMore01 from '@/views/personal/moreList01'
import PersonMore02 from '@/views/personal/moreList02'
import PersonMore03 from '@/views/personal/moreList03'
import MyExpress from '@/views/personal/myExpressList'
import MyLetter from '@/views/personal/myLetter'
import MyRemind from '@/views/personal/myRemind'
import NotFound from '@/views/404'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      name: 'Layout',
      component: Layout,
      redirect: 'home',
      children: [{
        path: 'home',
        name: 'Home',
        component: Home
      }, {
        path: '/personal/expressList',
        name: 'PersonUser',
        component: PersonUser
      }, {
        path: '/personal/replyList',
        name: 'PersonReply',
        component: PersonReply
      }, {
        path: '/personal/moreList01',
        name: 'PersonMore01',
        component: PersonMore01
      }, {
        path: '/personal/moreList02',
        name: 'PersonMore02',
        component: PersonMore02
      }, {
        path: '/personal/moreList03',
        name: 'PersonMore03',
        component: PersonMore03
      }, {
        path: '/personal/myExpressList',
        name: 'MyExpress',
        component: MyExpress
      }, {
        path: '/personal/myLetter',
        name: 'MyLetter',
        component: MyLetter
      }, {
        path: '/personal/myRemind',
        name: 'MyRemind',
        component: MyRemind
      }, {
        path: '/article/create',
        name: 'ArticleCreate',
        component: ArticleCreate
      }, {
        path: '/article/info',
        name: 'ArticleInfo',
        component: ArticleInfo
      }, {
        path: '/article/list',
        name: 'ArticleList',
        component: ArticleList
      }]
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/post',
      name: 'post',
      component: Post
    },
    {
      path: '*',
      name: 'notFound',
      component: NotFound
    }
  ]
})
