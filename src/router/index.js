import Vue from 'vue'
import VueRouter from 'vue-router'
import Router from 'vue-router';
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const router = new Router({
  routes: [
    {
      path: '/start',
      name: 'Start',
      component: () => import('../views/Start.vue')
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/settings',
      name: 'Settings',
      component: () => import('../views/Settings.vue')
    },
    {
      path: '/support',
      name: 'Support',
      component: () => import('../views/Support.vue')
    },
    {
      path: '/notifications',
      name: 'Notifications',
      component: () => import('../views/Notifications.vue')
    },
  ]
})

router.beforeEach((to, from, next) => {
  let token = localStorage.date && localStorage.name;

  if (
      token ||
      from.path === '/start' ||
      to.path === '/start'

  ) {
    next();
  } else {
    next({path: '/start'});
  }
});

export default router
