import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import About from '@/components/About'
import Account from '@/components/Account'
import Register from '@/components/Register'
import MultipleChoice from '@/components/Qtypes/MC'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/account',
      name: 'Account',
      component: Account
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/multipleChoice',
      name: 'MultipleChoice',
      component: MultipleChoice
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
