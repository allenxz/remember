<template>
  <div class="profile">
    <div class="header">
    <!--TODO 改成用户可自己修改-->
      <div class="banner"></div>
      <a-avatar class="avatar" shape="square" :size="160" icon="user" />
      <div class="info">
        <span class="name">吴亦凡</span>
        <a-icon type="man" style="margin-left: 5px;"/>
        <span class="motto">你看这面它又长又宽，你看这碗它又大又圆</span>
        <a-button class="button" type="default">修改个人资料</a-button>
      </div>
    </div>
    <div class="profileMain">
      <div class="profileMain-left">
        <a-tabs defaultActiveKey="1">
          <a-tab-pane key="1">
            <span slot="tab">
              <a-icon type="solution" />
              个人资料
            </span>
            <div class="person-info">
              <a-row>
                <a-col :span="2">性别：</a-col>
                <a-col :span="18">男</a-col>
              </a-row>
            </div>
          </a-tab-pane>
          <a-tab-pane key="2">
            <span slot="tab">
              <a-icon type="thunderbolt" />
              技能图谱
            </span>
            Tab 2
          </a-tab-pane>
        </a-tabs>
      </div>
      <div class="profile-right">
        <div class="graph">
          <h1>能力雷达图</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
  .profile{
  }

  .profile .header{
    background: #fff;
  }
  .profile .banner{
    display: block;
    padding: 24px;
    width: 100%;
    height: 240px;
    /*TODO*/
    background :url("./c4.jpg") no-repeat;
    background-size: cover;
  }

  .profile .avatar{
    display: inline-block;
    position: relative;
    top: -53px;
    left: 15px;
    border: 4px solid #fff;
    border-radius: 8px;
  }

  .profile .info{
    display: inline-block;
    position: relative;
    top: 10px;
    left: 24px;
    width: 80%;
  }

  .info .name{
    font-size: 35px;
    font-weight: 700;
  }

  .info .motto{
    display: block;
    margin-top: 15px;
  }

  .info .button{
    float: right;
    position: relative;
    top: -40px;
  }

  .profileMain{
    display: flex;
    margin-top: 15px;
  }

  .profileMain-left{
    flex: 1;
    padding: 10px;
    margin-right: 15px;
    background: #fff;
  }

  .profile-right{
    padding: 10px;
    flex: 0 0 25%;
    background: #fff;
  }
</style>
