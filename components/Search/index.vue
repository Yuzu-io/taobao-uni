<template>
  <view class="search">
    <u-search placeholder="请输入搜索关键词"
              disabled
              :showAction="false"
              shape="round"
              v-model="keyword"></u-search>
  </view>
</template>

<script>
export default {
  data () {
    return {
      keyword: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.search {
  padding: 10rpx 10rpx * 2;
  background-color: #fff;
}
</style>