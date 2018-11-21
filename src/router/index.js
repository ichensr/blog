import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout/layout'
import Home from '@/views/home/home'
import Index from '@/views/index/index'
import Post from '@/views/post'
import ArticleList from '@/views/article/list'
import ArticleInfo from '@/views/article/info'
import ArticleCreate from '@/views/article/create'
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
      }]
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/post',
      name: 'post',
      component: Post
    },
    {
      path: '',
      name: 'Layout',
      component: Layout,
      redirect: 'ArticleList',
      children: [{
        path: '/article/list',
        name: 'article-list',
        component: ArticleList
      }]
    },
    {
      path: '',
      name: 'Layout',
      component: Layout,
      redirect: 'ArticleInfo',
      children: [{
        path: '/article/info',
        name: 'article-info',
        component: ArticleInfo
      }]
    },
    {
      path: '',
      name: 'Layout',
      component: Layout,
      redirect: 'ArticleCreate',
      children: [{
        path: '/article/create',
        name: 'article-create',
        component: ArticleCreate
      }]
    }
  ]
})
