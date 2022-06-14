<template>
  <view class="home">
    <u-sticky offsetTop="0"
              customNavHeight="0">
      <Search></Search>
    </u-sticky>
    <view class="swiper">
      <Swiper></Swiper>
    </view>
    <view class="goods-list">
      <GoodsCard v-for="(item,index) in cardList"
                 :key="index"
                 :img="item.goods_avatar"
                 :title="item.goods_name"
                 :pic="item.goods_price"
                 @clickCard="clickCard"></GoodsCard>
    </view>
  </view>
</template>

<script>
import Search from '@/components/Search/index.vue';
import Swiper from '@/components/Swiper/index.vue';
import GoodsCard from '@/components/GoodsCard/index.vue';

import { getGoodsList } from '@/api/goods';
export default {
  components: {
    Search,
    Swiper,
    GoodsCard
  },
  data () {
    return {
      cardList: [
        {
          id: 1,
          goods_avatar: 'https://webstatic.mihoyo.com/upload/mall/2022/04/28/03f33a2f61fbaa7a810640a0566e5798_8775438881915565409.jpeg?x-oss-process=image/resize,m_lfit,w_1125,h_1125,limit_1/format,webp',
          goods_name: 'Q版表情包系列珠光工艺徽章',
          goods_price: 12
        },
        {
          id: 2,
          goods_avatar: 'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/193452/10/22389/321168/6245be18E69f03807/1b28592cb59620b1.jpg!q80.dpg.webp',
          goods_name: 'k50',
          goods_price: 12
        },
        {
          id: 3,
          goods_avatar: 'https://webstatic.mihoyo.com/upload/mall/2022/04/28/03f33a2f61fbaa7a810640a0566e5798_8775438881915565409.jpeg?x-oss-process=image/resize,m_lfit,w_1125,h_1125,limit_1/format,webp',
          goods_name: 'Q版表情包系列珠光工艺徽章',
          goods_price: 12
        },
        {
          id: 4,
          goods_avatar: 'https://webstatic.mihoyo.com/upload/mall/2022/04/28/03f33a2f61fbaa7a810640a0566e5798_8775438881915565409.jpeg?x-oss-process=image/resize,m_lfit,w_1125,h_1125,limit_1/format,webp',
          goods_name: 'Q版表情包系列珠光工艺徽章',
          goods_price: 12
        },
        {
          id: 5,
          goods_avatar: 'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/193452/10/22389/321168/6245be18E69f03807/1b28592cb59620b1.jpg!q80.dpg.webp',
          goods_name: 'k50',
          goods_price: 12
        },
        {
          id: 6,
          goods_avatar: 'https://webstatic.mihoyo.com/upload/mall/2022/04/28/03f33a2f61fbaa7a810640a0566e5798_8775438881915565409.jpeg?x-oss-process=image/resize,m_lfit,w_1125,h_1125,limit_1/format,webp',
          goods_name: 'Q版表情包系列珠光工艺徽章',
          goods_price: 12
        },
        {
          id: 7,
          goods_avatar: 'https://webstatic.mihoyo.com/upload/mall/2022/04/28/03f33a2f61fbaa7a810640a0566e5798_8775438881915565409.jpeg?x-oss-process=image/resize,m_lfit,w_1125,h_1125,limit_1/format,webp',
          goods_name: 'Q版表情包系列珠光工艺徽章',
          goods_price: 12
        }
      ]
    }
  },
  created () {
    this.getGoodsListApi()
  },
  methods: {
    // 获取数据
    getGoodsListApi () {
      getGoodsList(1, 10).then((res) => {
        console.log(res);
        if (res.data.code === 200) {
          this.cardList = res.data.data
        }
      }).catch((err) => {
        console.log(err);
      });
    },
    clickCard () {
      uni.navigateTo({ url: '/pages/details/details' })
    }
  },
}
</script>

<style lang="scss" scoped>
.home {
  .swiper {
    height: 200rpx * 2;
  }
  .goods-list {
    margin: 10rpx * 2;
    column-count: 2;
    column-gap: 10rpx * 2;
  }
}
</style>