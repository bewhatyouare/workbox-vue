import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
Vue.config.productionTip = false

let qrouter = 
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
