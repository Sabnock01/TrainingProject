import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import vuetify from './plugins/vuetify'
// Don't think this is being used?
import 'vuetify/dist/vuetify.min.css';
import './index.css'

import Login from './components/Login';
import Main from './components/Main';

Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/home',
    component: Main,
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

Vue.config.productionTip = false

new Vue({
  router, 
  vuetify,
  render: h => h(App)
}).$mount('#app')

router.replace('/login');
