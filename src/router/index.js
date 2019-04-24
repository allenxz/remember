import Vue from 'vue';
import Router from 'vue-router';
import index from '@/components/index/index';
import activity from '@/components/activity/activity';
import activityShow from '@/components/activityShow/activityShow';
import activitySummary from '@/components/activitySummary/activitySummary';
import login from '@/components/login/login';
import activityDetail from '../components/activityDetail/activityDetail'

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
      component: activity,
      children: [
        {
          path: 'activityShow',
          component: activityShow
        },
        {
          path: 'activitySummary/:className',
          component: activitySummary
        },
        {
          path: 'activityDetail/:className/:activityId',
          component: activityDetail
        }
      ]
    },
    {
      path: '/login',
      component: login
    }
  ]
})
