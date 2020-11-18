// import './public/css' 以下放共用的css檔
import './reset.css'
import './bootstrap/bootstrap-grid.min.css'
import './bootstrap/hamburgers.css'

import Vue from 'vue'
import App from './App.vue'
import router from './router'


// import './public/script.html' 以下放共用的js檔

Vue.config.productionTip = false
//------------------
//全域使用JQ在打開 現在先在組件內使用
// import $ from 'jquery'
// Vue.prototype.$ = $;
//----------------
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
