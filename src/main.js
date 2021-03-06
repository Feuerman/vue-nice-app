import Vue from 'vue'
import Vuetify from 'vuetify'
import VeeValidate from 'vee-validate';

import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

import 'vuetify/dist/vuetify.min.css'
import 'babel-polyfill'
import './styles/index.scss'

Vue.use(Vuetify)
Vue.use(VeeValidate);

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')