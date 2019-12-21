// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router';
import 'bootstrap';
import axios from 'axios'
import VueAxios from 'vue-axios'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css';
import './bus';
import currencyFilter from './filters/currency';
import VueI18n from 'vue-i18n';Vue.use(VueI18n);
import VeeValidate, { Validator } from 'vee-validate' 
import TW from 'vee-validate/dist/locale/zh_TW' 
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
Vue.use(VeeValidate);  
Vue.use(VeeValidate)  //啟用API
Validator.localize('zh-TW', TW)  //啟用語言包
Vue.use(require('vue-moment'));

axios.defaults.withCredentials = true;
Vue.component('Loading',Loading);
Vue.filter('currency',currencyFilter);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
})

router.beforeEach((to, from, next) => {
  console.log('to:',to,'from:',from,'next:',next);
  
  if (to.meta.requiresAuth){
    const api =`${process.env.APTPATH}/api/user/check`;
    axios.post(api)
    .then((response) => {
    console.log(response.data)
    if (response.data.success){
     next(); 
   }
   else {
     next({path:'/dash_board_login'})
   }
    });
  }
  else {
    next();
  }
  // ...
})
