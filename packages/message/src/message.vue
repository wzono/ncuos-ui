<template>
  <transition>
    <div class="us-message" v-show="show">
      <div class="us-message__icon" :class="[`icon__${type}`]"></div>
      <div class="us-message__content">
        <slot>
          {{ message }}
        </slot>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'us-message',
  data () {
    return {
      message: 'fuck',
      show: false,
      timer: null,
      duration: 3000,
      type: 'default'
    }
  },
  mounted () {
    this.StartTime()
  },
  methods: {
    StartTime () {
      this.show = true
      if (this.timer) {
        clearTimeOut(this.timer)
      } else {
        this.timer = setTimeout(() => {
          this.show = false
        }, this.duration)
      }
    }
  }
}
</script>

