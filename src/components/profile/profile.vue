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
              <a-row class="info-block">
                <a-col :span="10" class="info-bold"><a-icon type="message" style="margin-right: 8px"/>个人简介：</a-col><a-col :span="10">歌手、演员</a-col>
              </a-row>
              <a-row class="info-block">
                <a-col :span="10" class="info-bold"><a-icon type="mail" style="margin-right: 8px"/>电子邮箱：</a-col><a-col :span="10">wuyifan@vip.com</a-col>
              </a-row>
              <a-row class="info-block">
                <a-col :span="10" class="info-bold"><a-icon type="phone" style="margin-right: 8px"/>手机：</a-col><a-col :span="10">13111111111</a-col>
              </a-row>
              <a-row class="info-block">
                <a-col :span="10" class="info-bold"><a-icon type="team" style="margin-right: 8px"/>班级：</a-col><a-col :span="10">雷电1班</a-col>
              </a-row>
              <a-row class="info-block">
                <a-col :span="10" class="info-bold"><a-icon type="gift" style="margin-right: 8px"/>生日：</a-col><a-col :span="10">1995-1-1</a-col>
              </a-row>
              <a-row class="info-block">
                <a-col :span="10" class="info-bold"><a-icon type="home" style="margin-right: 8px"/>住址：</a-col><a-col :span="10">加拿大</a-col>
              </a-row>
              <a-row class="info-block">
                <a-col :span="10" class="info-bold"><a-icon type="qq" style="margin-right: 8px"/>QQ：</a-col><a-col :span="10">XXXXXXX</a-col>
              </a-row>
              <a-row class="info-block">
                <a-col :span="10" class="info-bold"><a-icon type="wechat" style="margin-right: 8px"/>微信：</a-col><a-col :span="10">XXXXXX</a-col>
              </a-row>
              <a-row class="info-block">
                <a-col :span="10" class="info-bold"><a-icon type="github" style="margin-right: 8px"/>github：</a-col><a-col :span="10">wuyifan</a-col>
              </a-row>
              <a-row class="info-block">
                <a-col :span="10" class="info-bold"><a-icon type="chrome" style="margin-right: 8px"/>博客：</a-col><a-col :span="10">www.wuyifam.com</a-col>
              </a-row>
              <a-row class="info-block">
                <a-col :span="10" class="info-bold"><a-icon type="environment" style="margin-right: 8px"/>工作地址：</a-col><a-col :span="10">B站</a-col>
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
        <div class="skill-chart">
          <h1>能力雷达图</h1>
          <radarChart :chartData="chartData"></radarChart>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import RadarChart from '../radarChart/radarChart';

  export default {
    data () {
      return {
        chartData: {value: [10, 3, 0, 1, 10, 3]}
      }
    },
    components: {
      RadarChart
    }
  };
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
    background :url("c4.jpg") no-repeat;
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
    flex: 0 0 25%;
  }

  .skill-chart{
    padding: 10px;
    background: #fff;
  }

  .person-info{
    width: 50%;
    margin: 20px auto;
  }

  .info-block{
    padding: 30px 0 30px 0;
    font-size: 15px;
  }

  .info-bold{
    font-size: 17px;
    font-weight: 600;
  }
</style>
