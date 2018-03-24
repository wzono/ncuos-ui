<template>
  <button>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'us-button',
  props: {
    type: {
      type: String,
      default: 'default'
    }
  },
  data() {
    return {

    }
  }
}
</script>
