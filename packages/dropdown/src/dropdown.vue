<template>
  <popper :trigger="trigger" :options="{placement: placement}">
    <div class="us-dropdown">
      <ul>
        <slot name="content">下拉菜单内容</slot>
      </ul>
    </div>
    <div slot="reference" class="trigger">
      <slot name="control">
        <button>Trigger</button>
      </slot>
    </div>
  </popper>
</template>

<script>
import Popper from 'vue-popperjs'
export default {
  name: 'us-dropdown',
  components: {
    'popper': Popper
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    trigger: {
      type: String,
      default: 'click'
    },
    placement: {
      type: String,
      default: 'bottom'
    }
  }
}
</script>

<style lang="scss" scoped>
.trigger {
  display: inline-block;
}
</style>
