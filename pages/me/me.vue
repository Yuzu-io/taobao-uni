<template>
  <view class="me">
    <!-- #ifdef H5 -->
    <Navbar title="我的">
      <template #left>
        <span></span>
      </template>
    </Navbar>
    <!-- #endif -->
    <HeadPic></HeadPic>
    <Cell class="cell"
          v-for="(item,index) in message"
          :key="index"
          :icon="item.icon"
          :title="item.title"
          :url="item.url"
          :isLink="true">
      <!-- #ifdef MP-WEIXIN -->
      <template #title>
        <span style="font-size:36rpx;">{{item.title}}</span>
      </template>
      <!-- #endif -->
    </Cell>
    <button class="logout">退出登录</button>
  </view>
</template>

<script>
import HeadPic from './component/HeadPic.vue';
import Navbar from '@/components/Navbar/index.vue';
import Cell from '@/components/Cell/index.vue';
export default {
  components: {
    HeadPic,
    Navbar,
    Cell,
  },
  data () {
    return {
      message: [
        {
          icon: 'order',
          title: "我的订单",
          url: '',
        },
        {
          icon: 'coupon',
          title: "我的优惠卷",
          url: '',
        },
        {
          icon: 'map',
          title: "收货地址",
          url: '',
        },
        {
          icon: 'phone',
          title: "联系客服",
          url: '',
        },
        {
          icon: 'file-text',
          title: "查看《服务条款》",
          url: '',
        }
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.me {
  //  #ifdef H5
  .cell ::v-deep .u-cell__title-text {
    font-size: 18rpx * 2;
  }
  // #endif
  .logout {
    margin-top: 20rpx;
    background-color: #fff !important;
  }
}
</style>