<template>
  <view class="swiper">
    <u-swiper :list="list"
              height="400rpx"
              @change="change"
              @click="click"></u-swiper>
  </view>
</template>

<script>
export default {
  data () {
    return {
      list: [
        'https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2022/04/29/ec8adbf14428d2a73adf077919115f91_9131913416118501680.jpg',
        'https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2022/05/01/4e546d9e93c70d2465c9f740396ef5b3_1264543245356158487.jpg',
        'https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2022/05/01/54452fe6975bcb364983b59d43be039f_6653823261006780140.jpg?x-oss-process=image/format,webp',
      ]
    }
  },
  methods: {
    change () {
    },
    click () {
      console.log('点击');
    }
  },
}
</script>

<style lang="scss" scoped>
</style>