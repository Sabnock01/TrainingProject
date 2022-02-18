import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import vuetify from './plugins/vuetify'
// Don't think this is being used?
import 'vuetify/dist/vuetify.min.css';
import './index.css'

import Login from './components/Login';
import Main from './components/Main';
import UsersTable from './components/UsersTable';
import ProjectsTable from './components/ProjectsTable.vue';
import TasksTable from './components/TasksTable.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/home',
    component: Main,
  },
  {
    path: '/users-table',
    component: UsersTable
  },
  {
    path: '/projects-table',
    component: ProjectsTable
  },
  {
    path: '/tasks-table',
    component: TasksTable
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
