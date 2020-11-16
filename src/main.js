import './reset.css'
import Vue from 'vue'
import App from './App.vue'

import './bootstrap/bootstrap-grid.min.css'
import './bootstrap/hamburgers.css'
// import './public/script.html'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
