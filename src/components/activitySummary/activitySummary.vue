<template>
  <div class="activitySummary">
    <h1>{{ $route.params.className}}</h1>
    <a-list
      itemLayout="vertical"
      size="large"
      :pagination="pagination"
      :dataSource="listData"
    >
      <a-list-item slot="renderItem" slot-scope="item, index" key="item.title">
        <template slot="actions">
          <span>
            <a-icon type="star-o" style="margin-right: 8px"/>
            {{item.start}}
          </span><span>
            <a-icon type="like-o" style="margin-right: 8px"/>
            {{item.like}}
          </span>
        </template>
<!--        <img slot="extra" width="272" alt="logo"-->
<!--                :src="item.images[0]" />-->
        <a-list-item-meta :description="item.description">
          <a slot="title" @click="skip(item.id)">{{item.title}}</a>
          <a-avatar slot="avatar" :src="item.avatar"/>
        </a-list-item-meta>
        <!--        解析字符串中的html代码-->
        <div class="content" v-html="item.content">
          {{item.content}}...
        </div>
      </a-list-item>
    </a-list>
  </div>
</template>

<script>
  // const ERR_OK = 0;
  export default {
    data () {
      return {
        listData: [],
        pagination: {
          onChange: (page) => {
            this.currentPage = page;
          },
          pageSize: 5
        },
        currentPage: 1
      }
    },
    created () {
      let url = 'http://172.28.7.24/Activity/class/1/';
      // let sendData = {
      //   'class_id': '1',
      //   'activity_id': '',
      //   'category': ''
      // };
      this.$http.get(url).then((response) => {
        this.listData = response.data;
      }, (err) => {
        console.log(err);
      }).catch((response) => {
        console.log(response);
      });
    },
    watch: {
      currentPage () {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    },
    methods: {
      skip (id) {
        this.$router.push({ path: `/activity/activityDetail/${this.$route.params.className}/${id}` });
      }
    }
  }
</script>

<style scoped>
  .activitySummary {
    min-height: 700px;
    padding: 24px;
    background: #fff;
  }

  .activitySummary h1 {
    margin: 20px;
    font-size: 30px;
  }

  .activitySummary .content {
    height: 100px;
    overflow: hidden;
  }
</style>
