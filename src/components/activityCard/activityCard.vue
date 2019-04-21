<template>
  <div style="padding: 20px;">
    <a-card
      hoverable
      style="width: 300px"
    >
      <img
        alt="example"
        :src="info.classImage"
        slot="cover"
      />
      <template class="ant-card-actions" slot="actions">
        <a-icon type="heart" title="关注"/>
        <a-icon type="star" title="置顶"/>
        <a-icon type="ellipsis" title="了解更多" @click="skip"/>
      </template>
      <a-card-meta
        :title="info.name"
        :description="info.desc">
        <a-avatar slot="avatar" :src="info.classAvatar" />
      </a-card-meta>
    </a-card>
  </div>
</template>

<script>
  export default {
    props: {
      info: {
        type: Object
      }
    },
    methods: {
      skip () {
        this.$router.push({ path: `/activity/activitySummary/${this.info.name}` });
      }
    }
  };
</script>

<style scoped>

</style>
