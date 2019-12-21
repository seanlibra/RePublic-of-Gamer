import Vue from 'vue';
import VueRouter from 'vue-router';
import front from '@/router/front.js'
import back from '@/router/dashboard'
Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        ...front,
        ...back
        ,
    ]
});