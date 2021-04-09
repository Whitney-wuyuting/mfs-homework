// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from './components/NotFound.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  {path: '/',component: Home},
  {path: '/about',component: About}
]

const router = new VueRouter({
  mode: 'history',
  routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template:"<router-view></router-view>"
})
