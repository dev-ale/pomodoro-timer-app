import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import store from './store'
import DateFilter from './filter/date'

Vue.config.productionTip = false
Vue.filter('date', DateFilter)

new Vue({
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
