<template>
  <div class="activity">
    <div class="text">
      <blockquote>"这里你可以看到每个班级的活动记录，回忆我们曾经美好的瞬间。"</blockquote>
    </div>
    <div class="container">
      <a-tabs defaultActiveKey="1" @change="callback" size="large">
        <a-tab-pane tab="所有班级" key="1">Content of Tab Pane 1</a-tab-pane>
        <a-tab-pane tab="我的班级" key="2" forceRender>Content of Tab Pane 2</a-tab-pane>
        <a-tab-pane tab="关注班级" key="3">Content of Tab Pane 3</a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
      }
    },
    methods: {
      callback (key) {
        console.log(key)
      }
    }
  }
</script>

<style scoped>
  .activity{
    padding: 30px;
    height: 700px;
  }

  .container{
    width: 90%;
    margin: 30px auto 0 auto;
  }
</style>
