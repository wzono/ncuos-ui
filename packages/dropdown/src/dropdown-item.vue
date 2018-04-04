<template>
  <li class="us-dropdown-item" :class="{'divided': divided}" @click="handleClick">
    <slot></slot>
  </li>
</template>

<script>
export default {
  name: 'us-dropdown-item',
  methods: {
    handleClick (e) {
      this.$parent.showPopper = false
    }
  },
  props: {
    divided: {
      type: Boolean,
      default: false
    }
  }
}
</script>
