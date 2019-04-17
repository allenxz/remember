<template>
  <div id="app">
    <a-layout id="components-layout">
      <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
        <div class="logo" />
        <a-menu
          theme="dark"
          mode="horizontal"
          :defaultSelectedKeys="['2']"
          :style="{ lineHeight: '64px' }"
        >
          <a-menu-item>
            <router-link to="/index">Remember</router-link>
          </a-menu-item>
          <a-menu-item>
            <a-icon type="message" />班级通知
          </a-menu-item>
          <a-menu-item>
            <router-link to="/activity">
              <a-icon type="flag" />班级活动
            </router-link>
          </a-menu-item>
          <a-menu-item>
            <a-icon type="file" />班级文件
          </a-menu-item>
          <a-menu-item>
            <a-icon type="gift" />好友生日
          </a-menu-item>
          <a-menu-item>
            <a-icon type="picture" />大家の黑照
          </a-menu-item>
          <a-menu-item>
            <a-icon type="reconciliation"/>我们的小目标
          </a-menu-item>
          <a-menu-item>
            <a-icon type="smile"/>漂流瓶
          </a-menu-item>
          <a-menu-item>
            <router-link to="/login">
              <a-icon type="alert" />登录
            </router-link>
          </a-menu-item>
          <a-menu-item>
            <a-icon type="home"/>我的
          </a-menu-item>
          <a-menu-item>
            <a-icon type="stop"/>注销
          </a-menu-item>
        </a-menu>
      </a-layout-header>
      <a-layout-content :style="{ padding: '0 50px', marginTop: '64px' }">
        <a-breadcrumb :style="{ margin: '16px 0' }">
          <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item>List</a-breadcrumb-item>
          <a-breadcrumb-item>App</a-breadcrumb-item>
        </a-breadcrumb>
        <div :style="{ background: '#fff', padding: '24px', minHeight: '380px' }">
          <router-view/>
        </div>
      </a-layout-content>
      <a-layout-footer :style="{ textAlign: 'center' }">
        Remember ©2019 Created by newBilityGroup
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  #components-layout .logo {
    width: 120px;
    height: 31px;
    background: rgba(255,255,255,.2);
    margin: 16px 24px 16px 0;
    float: left;
  }
</style>
