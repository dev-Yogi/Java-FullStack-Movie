import Vue from 'vue'
import App from './components/App.vue'
import axios from 'axios'
import router from './router'
import moment from 'moment'
import VueCompositionApi from '@vue/composition-api';

require("./assets/main.css");

Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.prototype.moment = moment
Vue.use(VueCompositionApi);



new Vue({
    router,
    render: h => h(App)
}).$mount('#app')