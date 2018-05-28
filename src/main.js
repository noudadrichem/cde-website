import Vue from 'vue'
import resource from 'vue-resource'
import App from './App'
import router from './router'

Vue.use(resource)

if (localStorage.getItem('token')) {
  Vue.http.interceptors.push((request, next) => {
    request.headers.set('Authorization', `Bearer ${localStorage.getItem('token')}`)
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
