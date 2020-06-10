import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import Home from '../views/Home.vue'
import History from '../views/History.vue'
import Register from '../views/auth/Register.vue'
import Login from '../views/auth/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Food Items',
    component: Home,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/history',
    name: 'History',
    component: History,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {
      requiresVisitor: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      requiresVisitor: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth) && !store.getters.isLogin) next({ name: 'Login' })
  else next()
  if (to.matched.some(record => record.meta.requiresVisitor) && store.getters.isLogin) next({ name: 'Food Items' })
  else next()
})

export default router
