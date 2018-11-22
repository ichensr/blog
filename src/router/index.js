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
import PersonUser from '@/views/personal/expuser'
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
        path: '/personal/expuser',
        name: 'PersonUser',
        component: PersonUser
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
