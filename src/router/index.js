import Vue from 'vue';
import Router from 'vue-router';
import index from '@/components/index/index';
import activity from '@/components/activity/activity';
import login from '@/components/login/login';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: index
    },
    {
      path: '/index',
      component: index
    },
    {
      path: '/activity',
      component: activity
    },
    {
      path: '/login',
      component: login
    }
  ]
})
