<template>
  <view class="goods-card">
    <image :src="img"
           mode="widthFix"
           @click="clickCard" />
    <view class="describe">
      <text class="title">{{title}}</text>
      <text class="pic">￥{{pic}}</text>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    pic: {
      type: Number,
      default: null
    }
  },
  methods: {
    clickCard () {
      this.$emit('clickCard')
    }
  },
}
</script>

<style lang="scss" scoped>
.goods-card {
  width: 170rpx * 2;
  background-color: #fff;
  border-radius: 15rpx * 2;
  break-inside: avoid;
  margin-bottom: 10rpx * 2;
  overflow: hidden;
  image {
    display: block;
    width: 100%;
  }
  .describe {
    padding: 0 10rpx * 2;
    text {
      display: block;
      line-height: 1.5;
      padding: 5rpx * 2 0;
    }
    .pic {
      font-weight: bold;
    }
  }
}
</style>