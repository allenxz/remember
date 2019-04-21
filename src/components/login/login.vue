<template>
  <div class="login-wrapper">
    <div id="clouds">
      <div class="cloud x1"></div>
      <div class="cloud x2"></div>
      <div class="cloud x3"></div>
      <div class="cloud x4"></div>
      <div class="cloud x5"></div>
    </div>
    <div class="container">
      <div id="login">
        <form method="post">
          <fieldset class="clearfix">
            <p><span class="fontawesome-user"></span><input type="text" placeholder="UserName" required></p>
            <p><span class="fontawesome-lock"></span><input type="password"  placeholder="Password" required></p>
            <p><input type="submit" @click="toLogin" value="Login"></p>
          </fieldset>
        </form>
        <p><a href="#" class="blue">Sign up now</a></p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
      };
    },
    methods: {
      toLogin () {
        let hasLogin = true;
        this.$emit('loginState', hasLogin);
      }
    }
  };
</script>

<style scoped>
  @import url(http://weloveiconfonts.com/api/?family=fontawesome);
  @import url(https://meyerweb.com/eric/tools/css/reset/reset.css);
  [class*="fontawesome-"]:before {
    font-family: 'FontAwesome', sans-serif;
  }

  .login-wrapper{
    height: 700px;
  }
  /* ---------- GENERAL ---------- */
  .clearfix {
    *zoom: 1;
  }
  .clearfix:before, .clearfix:after {
    content: ' ';
    display: table;
  }
  .clearfix:after {
    clear: both;
  }

  .container {
    left: 50%;
    position:absolute;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }

  /* ---------- LOGIN ---------- */
  #login {
    width: 300px;
  }

  #login form span {
    background-color: #363b41;
    border-radius: 3px 0px 0px 3px;
    color: #606468;
    display: block;
    float: left;
    height: 50px;
    line-height: 50px;
    text-align: center;
    width: 50px;
  }

  #login form input {
    height: 50px;
  }

  #login form input[type="text"], input[type="password"] {
    background-color: #3b4148;
    border-radius: 0 3px 3px 0;
    color: #606468;
    margin-bottom: 1em;
    padding: 0 16px;
    width: 250px;
  }

  #login form input[type="submit"] {
    border-radius: 3px;
    -moz-border-radius: 3px;
    -webkit-border-radius: 3px;
    background-color: #ea4c88;
    color: #eee;
    font-weight: bold;
    margin-bottom: 2em;
    text-transform: uppercase;
    width: 300px;
  }

  #login form input[type="submit"]:hover {
    background-color: #d44179;
  }

  #login > p {
    text-align: center;
  }

  #login > p span {
    padding-left: 5px;
  }

  #clouds{
    padding: 50px 0;
    background: #c9dbe9;
    background: -webkit-linear-gradient(top, #c9dbe9 0%, #fff 100%);
    background: linear-gradient(top, #c9dbe9 0%, #fff 100%);
    background: -moz-linear-gradient(top, #c9dbe9 0%, #fff 100%);
  }

  .cloud {
    width: 200px;
    height: 60px;
    background: #fff;

    border-radius: 200px;
    -moz-border-radius: 200px;
    -webkit-border-radius: 200px;
    position: relative;
    top:50px;
  }

  .cloud:before, .cloud:after {
    content: '';
    position: absolute;
    background: #fff;
    width: 100px; height: 80px;
    top: -15px;
    left: 10px;
    border-radius: 100px;
    -moz-border-radius: 100px;
    -webkit-border-radius: 100px;
    -webkit-transform: rotate(30deg);
    transform: rotate(30deg);
    -moz-transform: rotate(30deg);
  }

  .cloud:after {
    width: 120px; height: 120px;
    top: -55px; left: auto; right: 15px;
  }

  .x1 {
    -webkit-animation: moveclouds 15s linear infinite;
    -moz-animation: moveclouds 15s linear infinite;
    -o-animation: moveclouds 15s linear infinite;
  }

  .x2 {
    left: 200px;

    -webkit-transform: scale(0.6);
    -moz-transform: scale(0.6);
    transform: scale(0.6);
    opacity: 0.6;
    -webkit-animation: moveclouds 25s linear infinite;
    -moz-animation: moveclouds 25s linear infinite;
    -o-animation: moveclouds 25s linear infinite;
  }

  .x3 {
    left: -250px; top: -75px;

    -webkit-transform: scale(0.8);
    -moz-transform: scale(0.8);
    transform: scale(0.8);
    opacity: 0.8;
    -webkit-animation: moveclouds 20s linear infinite;
    -moz-animation: moveclouds 20s linear infinite;
    -o-animation: moveclouds 20s linear infinite;
  }

  .x4 {
    left: 470px; top: -125px;
    -webkit-transform: scale(0.75);
    -moz-transform: scale(0.75);
    transform: scale(0.75);
    opacity: 0.75;
    -webkit-animation: moveclouds 18s linear infinite;
    -moz-animation: moveclouds 18s linear infinite;
    -o-animation: moveclouds 18s linear infinite;
  }

  .x5 {
    left: -150px; top: -150px;
    -webkit-transform: scale(0.8);
    -moz-transform: scale(0.8);
    transform: scale(0.8);
    opacity: 0.8;
    -webkit-animation: moveclouds 20s linear infinite;
    -moz-animation: moveclouds 20s linear infinite;
    -o-animation: moveclouds 20s linear infinite;
  }

  @-webkit-keyframes moveclouds {
    0% {margin-left: 1000px;}
    100% {margin-left: -1000px;}
  }
  @-moz-keyframes moveclouds {
    0% {margin-left: 1000px;}
    100% {margin-left: -1000px;}
  }
  @-o-keyframes moveclouds {
    0% {margin-left: 1000px;}
    100% {margin-left: -1000px;}
  }
</style>
