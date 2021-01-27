import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'

require("./assets/main.css");

Vue.config.productionTip = false
Vue.prototype.$http = axios

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')