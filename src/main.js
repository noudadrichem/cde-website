// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import vueVimeoPlayer from 'vue-vimeo-player';
import Vue from 'vue';
import App from './App';
import router from './router';

Vue.use(vueVimeoPlayer);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
