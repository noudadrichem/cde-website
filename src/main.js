import Vue from 'vue'
import vueVimeoPlayer from 'vue-vimeo-player'
import resource from 'vue-resource'
import App from './App'
import router from './router'

Vue.use(vueVimeoPlayer)
Vue.use(resource)
Vue.config.productionTip = false

Vue.prototype.$eventBus = new Vue()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
