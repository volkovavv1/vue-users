import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import SingleUser from './components/SingleUser.vue'
import AllUsers from './components/AllUsers.vue'

Vue.use(VueRouter)

const Home = AllUsers;
const User = SingleUser;

const routes = [
    { path: '/', component: Home },
    { path: '/user', component: User }
]

export const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')