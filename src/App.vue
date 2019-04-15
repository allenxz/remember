<template>
  <div id="app">
    <a-menu mode="horizontal" class="menu-title">
      <a-menu-item>
        <router-link to="/index">Remember</router-link>
      </a-menu-item>
      <a-menu-item>
        <a-icon type="message" theme="twoTone"/>班级通知
      </a-menu-item>
      <a-menu-item>
        <a-icon type="flag" theme="twoTone"/>班级活动
      </a-menu-item>
      <a-menu-item>
        <a-icon type="file" theme="twoTone"/>班级文件
      </a-menu-item>
      <a-menu-item>
        <a-icon type="gift" theme="twoTone"/>好友生日
      </a-menu-item>
      <a-menu-item>
        <a-icon type="picture" theme="twoTone"/>大家の黑照
      </a-menu-item>
      <a-menu-item>
        <a-icon type="reconciliation" theme="twoTone"/>我们的小目标
      </a-menu-item>
      <a-menu-item>
        <a-icon type="smile" theme="twoTone"/>漂流瓶
      </a-menu-item>
      <a-menu-item>
        <a-icon type="alert" theme="twoTone"/>登录
      </a-menu-item>
      <a-menu-item>
        <a-icon type="home" theme="twoTone"/>我的
      </a-menu-item>
      <a-menu-item>
        <a-icon type="stop" theme="twoTone"/>注销
      </a-menu-item>
    </a-menu>
    <router-view/>
    <div class="footer">
      <div class="footer-wrapper">
        <span class="footer-item"><a href="https://github.com/newBilityGroup/Remember-frontEnd">GitHub</a> | <a href="https://github.com/newBilityGroup/Remember-frontEnd/issues">Issues</a></span>
        <span class="footer-item">Re<span class="red">me</span>mber</span>
        <span class="footer-item">Made By <a href="https://github.com/newBilityGroup">newBilityGroup</a></span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  .menu-title{
    font-size: 16px;
  }

  .footer{
    width: 100%;
    height: 150px;
    background: #252525;
  }

  .footer-wrapper{
    width: 75%;
    margin: 0 auto;
    padding-top: 30px;
  }

  .footer-item{
    display: block;
    text-align: center;
    font-size: 20px;
    padding: 3px;
    color: #ffffff;
  }

  .red{
    color: red;
  }
</style>
