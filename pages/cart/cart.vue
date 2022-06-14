<template>
  <view class="cart">
    <!-- #ifdef H5 -->
    <Navbar title="购物车">
      <template #left>
        <span></span>
      </template>
    </Navbar>
    <!-- #endif -->
    <view v-if="shoppingCart.length !== 0">
      <!-- 列表 -->
      <view>
        <u-checkbox-group placement="column">
          <view class="cart-goods-card"
                v-for="(item, index) in shoppingCart"
                :key="index">
            <u-checkbox :customStyle="{marginBottom: '8px'}"
                        :checked="item.selected"
                        @change="checkboxChange($event,index)"
                        shape="circle"
                        :name="item.name">
            </u-checkbox>
            <view style="flex:1;">
              <CartGoodsCard></CartGoodsCard>
            </view>
          </view>
        </u-checkbox-group>
      </view>
      <!-- 全选栏 -->
      <Cell class="shopping-cart-checkout">
        <template #title>
          <u-checkbox-group>
            <u-checkbox shape="circle"
                        :checked="isCartCheckedAll"
                        @change="cartAll"
                        :customStyle="{marginBottom: '8px'}">
            </u-checkbox>
          </u-checkbox-group>
        </template>
        <template #value>
          <view style="display:flex;">
            <view class="total">
              <u--text text="合计："></u--text>
              <u--text mode="price"
                       color="#ee0a24"
                       text="00.00"></u--text>
            </view>
            <u-button shape="circle"
                      :disabled="checkboxCart.length == 0"
                      :customStyle="{width:'auto',background:'linear-gradient(90deg,#ff6034,#ee0a24)',color:'#fff'}"
                      text="提交订单"></u-button>
          </view>
        </template>
      </Cell>
    </view>
    <view v-else>
      <Empty class="empty"
             icon="/static/image/cart/shoppingcartnull.webp"></Empty>
      <view class="recommend-title">为你推荐</view>
      <view class="goods-list">
        <GoodsCard v-for="(item,index) in cardList"
                   :key="index"
                   :img="item.goods_avatar"
                   :title="item.goods_name"
                   :pic="item.goods_price"
                   @clickCard="clickCard"></GoodsCard>
      </view>
    </view>
  </view>
</template>

<script>
import Empty from '@/components/Empty/index.vue';
import Navbar from '@/components/Navbar/index.vue';
import Cell from '@/components/Cell/index.vue';
import GoodsCard from '@/components/GoodsCard/index.vue';
import CartGoodsCard from '@/components/CartGoodsCard/index.vue';
export default {
  components: {
    Empty,
    Navbar,
    Cell,
    GoodsCard,
    CartGoodsCard,
  },
  data () {
    return {
      checkboxValue1: [],
      checkboxCart: [],
      isCartChecked: false,
      isCartCheckedAll: false,
      // 推荐商品
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
      ],
      // 购物车数据
      shoppingCart: [
        {
          name: '苹果',
          selected: false
        },
        {
          name: '香蕉',
          selected: false
        },
        {
          name: '橙子',
          selected: false
        }
      ]
    }
  },
  methods: {
    checkboxChange (e, n) {
      this.shoppingCart[n].selected = e
      this.isCartCheckedAll = this.shoppingCart.find(item => !item.selected) ? false : true

      if (e) {
        if (!this.checkboxCart.find(item => item.name === this.shoppingCart[n].name)) {
          this.checkboxCart.push(this.shoppingCart[n])
        }
      } else {
        let cursor = null;
        this.checkboxCart.find((item, index) => {
          if (this.shoppingCart[n].name == item.name) {
            cursor = index
          }
        })
        if (!cursor) {
          this.checkboxCart.splice(cursor, 1)
        }
      }
    },
    // 全选
    cartAll () {
      this.isCartCheckedAll = this.shoppingCart.length ? !this.isCartCheckedAll : false
      this.shoppingCart.forEach(element => {
        element.selected = this.isCartCheckedAll
      });
      if (this.isCartCheckedAll) {
        this.checkboxCart = this.shoppingCart
      } else {
        this.checkboxCart = []
      }
      console.log(this.checkboxCart);
    },
  },
}
</script>

<style lang="scss" scoped>
.cart {
  .cart-goods-card {
    display: flex;
    padding: 10rpx * 2 15rpx * 2;
    background-color: #fff;
  }
  .shopping-cart-checkout {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .total {
    display: flex;
    padding: 0 10rpx * 2;
  }
  .recommend-title {
    padding: 10rpx * 2 10rpx * 2 0 10rpx * 2;
  }
  .empty {
    padding: 32rpx * 2 0;
    background-color: #fff;
  }
  .goods-list {
    margin: 10rpx * 2;
    column-count: 2;
    column-gap: 10rpx * 2;
  }
}
</style>