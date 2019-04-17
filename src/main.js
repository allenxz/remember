// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import Menu from 'ant-design-vue/lib/menu';
import Icon from 'ant-design-vue/lib/icon';
import Carousel from 'ant-design-vue/lib/carousel';
import Tabs from 'ant-design-vue/lib/tabs';
import Layout from 'ant-design-vue/lib/layout';
import Breadcrumb from 'ant-design-vue/lib/breadcrumb';
import 'ant-design-vue/dist/antd.css';
import '../static/css/reset.css';

Vue.use(Menu);
Vue.use(Icon);
Vue.use(Carousel);
Vue.use(Tabs);
Vue.use(Layout);
Vue.use(Breadcrumb);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
