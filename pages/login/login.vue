<template>
  <view class="bg">
    <image src="../../static/image/bg/bg.png" mode=""></image>
    <view class="title">
      <u--form>
        <u-form-item>
          <view class="info">
            <view class="father">
              <span>账号</span>
              <u--input
                type="text"
                class="uni-input-border"
                border="surround"
                v-model="username"
                shape="circle"
                @change="change"
                clearable
                prefixIcon="account"
                prefixIconStyle="color:#fff"
              ></u--input>
            </view>

            <view class="father">
              <span>密码</span>
              <u--input
                type="password"
                class="uni-input-border"
                border="surround"
                v-model="password"
                prefixIcon="lock-open"
                prefixIconStyle="color:#fff"
                shape="circle"
                clearable
                @change="change"
              ></u--input>
            </view>

            <view class="btn">
              <u-button type="info" size="small" text="登录" shape="circle">
              </u-button>
              <navigator url="/pages/register/register">没有账号?点击注册</navigator>
            </view>
          </view>
        </u-form-item>
      </u--form>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      isAuthorization: true,
      username: "",
      password: "",
      value: "",
    };
  },
  methods: {
    change(n) {
      console.log(n);
    },
  },
};
</script>

<style lang="scss">
.bg image {
  position: absolute;
  width: 100%;
  height: 100%;
}
.title {
  display: flex;
  align-items: center;
  justify-content: center;
}
.info {
  background-color: #efefef;
  padding: 25rpx 30rpx;
  margin-top: 450rpx;
}
.uni-input-border {
  position: relative;
  border: 1px solid #fff;
  z-index: 5;
}
.father {
  display: flex;
  height: 60rpx;
  width: 600rpx;
  margin-top: 30rpx;
}
.father span {
  line-height: 60rpx;
  color: #efefef;
  margin-right: 15rpx;
  font-size: 30rpx;
  position: relative;
  z-index: 4;
}
.btn {
  margin-top: 30rpx;
  position: relative;
  color: #fff;
}
.btn navigator {
  margin-top: 20rpx;
  position: absolute;
  right: 0;
  color: #ffffff;
  font-size: 27rpx;
}
</style>
