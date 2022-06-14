<template>
  <view class="cell">
    <u-cell :icon="icon"
            :title="title"
            :isLink="isLink"
            :url="url">
      <template #title>
        <slot name="title"></slot>
      </template>
      <template #value>
        <slot name="value"></slot>
      </template>
    </u-cell>
  </view>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: '',
    },
    url: {
      type: String,
      default: ''
    },
    isLink: {
      type: Boolean,
      default: false
    }
  },
}
</script>

<style lang="scss" scoped>
.cell {
  background-color: #fff;
}
</style>