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
        <template slot="actions" v-for="{type, text} in actions">
        <span :key="type">
          <a-icon :type="type" style="margin-right: 8px"/>
          {{text}}
        </span>
        </template>
        <img slot="extra" width="272" alt="logo"
             src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"/>
        <a-list-item-meta
          :description="item.description"
        >
          <a slot="title">{{item.title}}</a>
          <a-avatar slot="avatar" :src="item.avatar"/>
        </a-list-item-meta>
        {{item.content}}
        <!--      评论区-->
      </a-list-item>
      <a-list
        v-if="comments.length"
        :dataSource="comments"
        :header="`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`"
        itemLayout="horizontal"
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
    </a-list>
  </div>
</template>

<script>
  import moment from 'moment';
  const ERR_OK = 0;

  export default {
    data () {
      return {
        listData: [],
        pagination: {
          onChange: (page) => {
            console.log(page)
          },
          pageSize: 1
        },
        actions: [
          {type: 'star-o', text: '156'},
          {type: 'like-o', text: '156'},
          {type: 'message', text: '2'}
        ],
        comments: [],
        submitting: false,
        value: '',
        moment
      }
    },
    created () {
      this.$http.get('/api/activityList').then((response) => {
        response = response.body;
        if (response.errno === ERR_OK) {
          this.listData = response.data;
        }
      })
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
            }
          ]
          this.value = '';
        }, 1000)
      },
      handleChange (e) {
        this.value = e.target.value;
      }
    }
  }
</script>

<style scoped>
  .activitySummary {
    min-height: 700px;
  }

  .activitySummary h1 {
    margin: 20px;
    font-size: 30px;
  }
</style>
