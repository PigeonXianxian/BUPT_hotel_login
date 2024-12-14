import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/Manager.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'manager',
    component: HomeView,
    redirect: '/home', // 重定向
    children: [
      {path: 'home', name: 'home', component: () => import('../views/Manager/HomeView')}, // 系统的主页
      {path: 'customer', name: 'customer', component: () => import('../views/Manager/Customer')}, // 这里改成对应的用户跳转界面
    ]
  },
  {
    path: "/login",
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: "/register",
    name: 'register',
    component: () => import('../views/Register.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
