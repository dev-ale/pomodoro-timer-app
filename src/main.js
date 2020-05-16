import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import store from './store'
import DateFilter from './filter/date'
import moment from "moment";
import titleComponent from './components/VueTitle';

Vue.config.productionTip = false
Vue.filter('date', DateFilter)
Vue.component('vue-title', titleComponent);
moment.locale('de')

new Vue({
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
