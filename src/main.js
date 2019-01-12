import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'

import VueFire from 'vuefire'

Vue.config.productionTip = false
Vue.use(VueFire)

new Vue({
  render: (h) => h(App)
}).$mount('#app')
