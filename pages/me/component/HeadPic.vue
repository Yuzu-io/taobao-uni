<template>
  <view class="title">
    <!-- 图片 -->
    <view class="img">
      <u--image :showLoading="true"
                shape="circle"
                :src="src"
                width="80px"
                height="80px"
                @click="click"></u--image>
    </view>
    <!-- 名称 -->
    <view class="info">
      <view>张三123</view>
      <view>李四123</view>
    </view>
  </view>
</template>

<script>
export default {
  data () {
    return {
      src: "https://cdn.uviewui.com/uview/album/1.jpg",
    };
  },
};
</script>

<style lang="scss" scoped>
.title {
  height: 200rpx;
  background-color: #fff;
  margin-bottom: 20rpx;
  display: flex;
  align-items: center;
  .img {
    margin-left: 50rpx;
  }
  .info {
    flex: 1;
    margin-left: 30rpx;
  }
}
</style>