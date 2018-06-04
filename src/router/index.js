import Vue from 'vue'
import Router from 'vue-router'

// Pages
import Home from '@/pages/Home'
import Grid from '@/pages/Grid'
import Stylekit from '@/pages/Stylekit'
import Campaign from '@/pages/Campaign'
import Login from '@/pages/Login'
import CmsHome from '@/pages/cmsHome'

// Components
Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [{
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
    path: '/campaign',
    name: 'campaign',
    component: Campaign
  },
  {
    path: '/campaign/:recipeName',
    name: 'campaignRecipe',
    component: Campaign
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
  if (to.meta.guarded) {
    if (!localStorage.getItem('token')) {
      next({ path: '/login' })
    }
  }
  next()
})


export default router
