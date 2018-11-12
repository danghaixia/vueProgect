import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import user from '@/pages/user'
import article from '@/pages/article'
import category from '@/pages/category'
import setting from '@/pages/setting'
import info from '@/pages/setting/info'
import auth from '@/pages/setting/auth'
import adv from '@/pages/setting/adv'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: HelloWorld
    },{
      path: '/user',
      component: user
    },{
      path: '/article',
      component: article
    },{
      path: '/category',
      component: category
    },{
      path: '/setting',
      component: setting,
      children:[{
      	path:'info',
      	component: info
      },{
      	path:'auth',
      	component: auth
      },{
      	path:'adv',
      	component: adv
      }]
    }
  ]
})
