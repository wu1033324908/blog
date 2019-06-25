import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store';
import vueResource from 'vue-resource';
// import '../src/assets/style/main.css'
Vue.use(vueResource)
Vue.config.productionTip = false

/* eslint-disable no-new */

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
