import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index'
import Home from '../views/Home/index.vue'
import Dashboard from '../views/Home/Dashboard'
import FriendPage from '../views/Home/FriendPage'
import GroupPage from '../views/Home/GroupPage'
import PrivatePage from '../views/Home/PrivatePage'
import Edit from '../views/Home/EditPage'
import Login from '../views/Auth/Login'
import Register from '../views/Auth/Register'
import Loader from '../views/Loader/index.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
    redirect: {
      name: 'dashboard'
    },
    meta: { requiresAuth: true },
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: Dashboard
      },
      {
        path: 'freindPage',
        name: 'friend',
        component: FriendPage
      },
      {
        path: 'group',
        name: 'group',
        component: GroupPage
      },
      {
        path: 'user',
        name: 'user',
        component: PrivatePage
      },
      {
        path: 'edit',
        name: 'edit',
        component: Edit
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: { requiresVisitor: true }
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    meta: { requiresVisitor: true }
  },
  {
    path: '/',
    name: 'load',
    component: Loader
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.islogin && typeof store.state.token !== 'undefined') {
      next()
    } else {
      next({
        path: '/login'
      })
    }
  } else if (to.matched.some(record => record.meta.requiresVisitor)) {
    if (store.getters.islogin && typeof store.state.token !== 'undefined') {
      next({
        path: '/'
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})

export default router
