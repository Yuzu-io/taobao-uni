<template>
  <view class="cart-goods-card-right">
    <view class="left">
      <u--image :showLoading="true"
              :src="src"
              width="80px"
              height="80px"></u--image>
    </view>
    <view class="right">
      <view class="top">
        <u--text text="我用十年青春,赴你最后之约"></u--text>
        <u--text text="我用十年青春,赴你最后之约"></u--text>
      </view>
      <view class="bottom">
        <u--text mode="price"
                 text="728732.32"></u--text>
        <!-- 计数器 -->
        <u-number-box v-model="value">
          <view slot="minus"
                class="minus">
            <u-icon name="minus"
                    size="12"></u-icon>
          </view>
          <text slot="input"
                style="width: 50px;text-align: center;"
                class="input">{{value}}</text>
          <view slot="plus"
                class="plus">
            <u-icon name="plus"
                    color="#FFFFFF"
                    size="12"></u-icon>
          </view>
        </u-number-box>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data () {
    return {
      src: 'https://cdn.uviewui.com/uview/album/1.jpg',
      value: 1
    }
  },
}
</script>

<style lang="scss" scoped>
.cart-goods-card-right{
  display: flex;
  .left{
    padding: 0 10rpx;
  }
  .right{
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .bottom{
      display: flex;
      justify-content: space-between;
    }
  }
}
.minus {
  width: 22px;
  height: 22px;
  border-width: 1px;
  border-color: #e6e6e6;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  @include flex;
  justify-content: center;
  align-items: center;
}

.input {
  padding: 0 10px;
}

.plus {
  width: 22px;
  height: 22px;
  background-color: #ff0000;
  border-radius: 50%;
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */
  justify-content: center;
  align-items: center;
}
</style>