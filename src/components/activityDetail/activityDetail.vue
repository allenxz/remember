<template>
  <div class="activityDetail">
    <div>
      <h1>{{activityData.title}}</h1>
      <div class="info">
        <a-avatar :src="activityData.avatar"/>
        <div class="desc">{{activityData.description}}</div>
      </div>
      <div class="content-wrapper">
        <div v-html="activityData.content" class="content">
          {{activityData.content}}
        </div>
        <div class="images">
          <img  width="272" alt="logo" v-for="image in activityData.urlList" :key="image.index"
                :src="image" style="display: block;margin: 10px;"/>
        </div>
      </div>
    </div>
    <!-- 评论区-->
    <div id="commentArea">
      <a-comment>
        <a-avatar
          slot="avatar"
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          alt="Han Solo"
        />
        <div slot="content">
          <a-form-item>
            <a-textarea :rows="4" @change="handleChange" :value="value"></a-textarea>
          </a-form-item>
          <a-form-item>
            <a-button
              htmlType="submit"
              :loading="submitting"
              @click="handleSubmit"
              type="primary"
            >
              说点什么~
            </a-button>
          </a-form-item>
        </div>
      </a-comment>
      <a-list
        v-if="comments.length"
        :dataSource="comments"
        :header="`${comments.length} 条回复`"
        itemLayout="horizontal"
        :pagination="pagination"
      >
        <a-list-item slot="renderItem" slot-scope="item, index">
          <a-comment
            :author="item.author"
            :avatar="item.avatar"
            :content="item.content"
            :datetime="item.datetime"
          >
          </a-comment>
        </a-list-item>
      </a-list>
    </div>

  </div>
</template>

<script>
  import moment from 'moment';
  const ERR_OK = 0;
  export default {
    data () {
      return {
        activityData: {},
        pagination: {
          onChange: (page) => {
            this.currentPage = page;
          },
          pageSize: 10
        },
        actions: [
          {type: 'star-o', text: 0},
          {type: 'like-o', text: 0}
        ],
        comments: [],
        submitting: false,
        value: '',
        currentPage: 1,
        moment
      }
    },
    created () {
      this.$http.get('/api/activity').then((response) => {
        response = response.body;
        if (response.errno === ERR_OK) {
          this.activityData = response.data;
          console.log(this.activityData);
        }
      });
      this.$http.get('/api/commentList').then((response) => {
        response = response.body;
        if (response.errno === ERR_OK) {
          this.comments = response.data;
        }
      });
    },
    methods: {
      handleSubmit () {
        if (!this.value) {
          return;
        }

        this.submitting = true;

        setTimeout(() => {
          this.submitting = false;
          this.comments = [
            {
              author: '莞工吴亦凡',
              avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
              content: this.value,
              datetime: moment().fromNow()
            },
            ...this.comments
          ]
          this.value = '';
        }, 1000)
      },
      handleChange (e) {
        this.value = e.target.value;
      }
    },
    watch: {
      currentPage () {
        let element = document.getElementById('commentArea');
        window.scrollTo({
          top: document.documentElement.scrollTop - element.getBoundingClientRect().top + 300,
          behavior: 'smooth'
        });
      }
    }
  }
</script>

<style scoped>
  .activityDetail {
    min-height: 700px;
  }

  .activityDetail h1 {
    margin: 20px;
    font-size: 30px;
  }

  .activityDetail .info{
    padding-bottom: 30px;
  }

  .activityDetail .desc {
    display: inline;
    font-size: 15px;
    height: 32px;
    line-height: 32px;
    color: #7e8c8d;
  }
  .activityDetail .content-wrapper{
    display: flex;
    width: 100%;
  }
  .activityDetail .content-wrapper .content{
    flex: 1;
  }
  .activityDetail .content-wrapper .images{
    flex: 0 0 272px;
    margin:0 20px 0 40px;
  }
</style>
