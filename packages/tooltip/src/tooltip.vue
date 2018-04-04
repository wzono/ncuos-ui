<template>
  <popper :trigger="trigger" :force-show="show" :options="{placement: position}">
    <div class="us-tooltip" :class="appearience">
      <slot name="content">Tooltip content</slot>
    </div>
    <div slot="reference" style="display: inline-block">
      <slot name="control">
        <button>Trigger</button>
      </slot>
    </div>
  </popper>
</template>

<script>
  import Popper from 'vue-popperjs'
  export default {
    name: 'us-tooltip',
    components: {
      'popper': Popper
    },
    props: {
      appearience: {
        type: String,
        default: 'dark'
      },
      trigger: {
        type: String,
        default: 'hover'
      },
      position: {
        type: String,
        default: 'left'
      },
      show: {
        type: Boolean,
        default: false
      }
    }
  }
</script>
