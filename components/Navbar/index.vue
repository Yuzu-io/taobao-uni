<template>
  <view>
    <u-navbar :title="title"
              :autoBack="autoBack"
              :fixed="fixed">
              <template #left>
                <slot name="left"></slot>
              </template>
    </u-navbar>
  </view>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    autoBack: {
      type: Boolean,
      default: false
    },
    fixed: {
      type: Boolean,
      default: false
    }
  },
}
</script>

<style>
</style>