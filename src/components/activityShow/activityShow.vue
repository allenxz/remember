<template>
  <div class="activityShow">
    <div class="text">
      <blockquote>"这里你可以看到每个班级的活动记录，回忆我们曾经美好的瞬间。"</blockquote>
    </div>
    <div class="container">
      <a-tabs defaultActiveKey="1" @change="callback" size="large">
        <a-tab-pane tab="所有班级" key="1">
          <a-row :gutter="16">
            <a-col :sm="24" :md="12" :lg="8" :xl="6" v-for="info in classList" :key="info.index">
              <activityCard :info="info"></activityCard>
            </a-col>
          </a-row>
        </a-tab-pane>
        <a-tab-pane tab="关注班级" key="2">
          <a-row :gutter="16">
            <a-col :sm="24" :md="12" :lg="8" :xl="6" v-for="info in classList" :key="info.index">
              <activityCard :info="info"></activityCard>
            </a-col>
          </a-row>
        </a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>

<script>
  import activityCard from '@/components/activityCard/activityCard';

  const ERR_OK = 0;
  export default {
    data () {
      return {
        classList: []
      }
    },
    methods: {
      callback (key) {
        console.log(key)
      }
    },
    components: {
      activityCard
    },
    created () {
      this.$http.get('/api/classList').then((response) => {
        response = response.body;
        if (response.errno === ERR_OK) {
          this.classList = response.data;
        }
        console.log(this.classList);
      });
    }
  }
</script>

<style scoped>
  .activityShow{
    min-height: 700px;
    padding: 24px;
    background: #fff;
  }

  .container{
    width: 90%;
    margin: 30px auto 0 auto;
  }
</style>
