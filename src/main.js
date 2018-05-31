import Vue from 'vue'
import resource from 'vue-resource'
import App from './App'
import router from './router'

Vue.use(resource)

Vue.prototype.$eventBus = new Vue()

const token = localStorage.getItem('token')
if (token) {
  Vue.http.interceptors.push((request, next) => {
    request.headers.set('Authorization', `Bearer ${token}`)
    request.headers.set('Accept', 'application/json')
    next()
  })
}

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
