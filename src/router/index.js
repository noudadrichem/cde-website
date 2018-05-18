import Vue from 'vue'
import Router from 'vue-router'

// Pages
import Home from '@/pages/Home'
import Grid from '@/pages/Grid'
import Stylekit from '@/pages/Stylekit'
import Campaign from '@/pages/Campaign'

// Components

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
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
      path: '/campaign',
      name: 'campaign',
      component: Campaign
    }
  ]
})
