import Vue from 'vue';
import Router from 'vue-router';

// Pages
import Home from '@/pages/Home';

// Components

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
  ],
});
