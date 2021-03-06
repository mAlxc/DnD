import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/views/Home/HomePage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home // elemnt afficehr au sein du router view
    },
    {
      path: '/about',
      name: 'about',
      component: HelloWorld // elemnt afficehr au sein du router view
    }
  ]
})
