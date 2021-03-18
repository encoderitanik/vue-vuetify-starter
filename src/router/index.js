import Vue from 'vue'
import VueRouter from 'vue-router'
import { view } from '../helpers'
import { _baseURL } from '../consts'

// Components
import Home from '@/views/Home.vue'
import DefaultLayout from '@/layouts/Default.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: _baseURL,
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        {
          path: '',
          name: 'Home',
          component: Home
        },
        {
          path: 'users',
          name: 'Users',
          component: view('Users')
        },
        {
          path: 'about',
          name: 'About',
          component: view('About')
        }
      ]
    },
  ]
})

export default router
