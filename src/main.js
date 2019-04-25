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
import Card from 'ant-design-vue/lib/card';
import Row from 'ant-design-vue/lib/row';
import Col from 'ant-design-vue/lib/col';
import Avatar from 'ant-design-vue/lib/avatar';
import List from 'ant-design-vue/lib/list';
import Pagination from 'ant-design-vue/lib/pagination';
import Comment from 'ant-design-vue/lib/comment';
import Form from 'ant-design-vue/lib/form';
import Input from 'ant-design-vue/lib/input';
import Button from 'ant-design-vue/lib/button';
import Divider from 'ant-design-vue/lib/divider';
import 'ant-design-vue/dist/antd.css';
import '../static/css/reset.css';
import VueResource from 'vue-resource';
import Vuex from 'vuex';

Vue.use(Vuex);
Vue.use(Menu);
Vue.use(Icon);
Vue.use(Carousel);
Vue.use(Tabs);
Vue.use(Layout);
Vue.use(Breadcrumb);
Vue.use(Card);
Vue.use(Row);
Vue.use(Col);
Vue.use(Avatar);
Vue.use(VueResource);
Vue.use(List);
Vue.use(Pagination);
Vue.use(Comment);
Vue.use(Form);
Vue.use(Input);
Vue.use(Button);
Vue.use(Divider);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
