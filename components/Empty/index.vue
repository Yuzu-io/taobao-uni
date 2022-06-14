<template>
  <view class="empty">
    <u-empty mode="car"
             :icon="icon">
    </u-empty>
  </view>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: ''
    },
  },
}
</script>

<style>
</style>