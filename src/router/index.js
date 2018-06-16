import Vue from 'vue'
import Router from 'vue-router'

// Pages
import Home from '@/pages/Home'
import Grid from '@/pages/Grid'
import Stylekit from '@/pages/Stylekit'
import Campaign from '@/pages/Campaign'
import Login from '@/pages/Login'
import CmsHome from '@/pages/cmsHome'
import Ranking from '@/pages/Ranking'

// Components
Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [{
    path: '*',
    name: '404',
    component: Home
  },
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/grid',
    name: 'grid',
    component: Grid
  },
  {
    path: '/stylekit',
    name: 'stylekit',
    component: Stylekit
  },
  {
    path: '/campaign/:recipeName?',
    name: 'campaignRecipe',
    component: Campaign
  },
  {
    path: '/ranking/:recipeName?',
    name: 'Ranking',
    component: Ranking
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }, {
    path: '/cmsHome',
    name: 'cmsHome',
    component: CmsHome,
    meta: {
      guarded: true
    }
  }]
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')
  document.body.style.paddingTop = 0
  if (to.meta.guarded) {
    if (!token || token === undefined) {
      next({ path: '/login' })
    }
  } else if (to.name === 'login') {
    if (token) {
      next({ path: '/cmsHome' })
    }
  }
  next()
})


export default router
