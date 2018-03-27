<template>
  <transition name="messagebox">
    <div class="message">
      <div class="us-message" v-show="show">
        <div class="us-message__content">
          <slot>
            <i v-if="type !== 'default'" class="fa icon" :class="[
            {'fa-check-circle': type === 'success'},
            {'fa-info-circle': type === 'info'},
            {'fa-exclamation-circle': type === 'warning'},
            {'fa-times-circle': type === 'error'}, `icon__${type}`]"></i>
            <span>{{ message }}</span>
          </slot>
        </div>
        <div class="us-message__close" @click="show = false">&times;</div>
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
        if (this.duration !== 0) {
          this.timer = setTimeout(() => {
            this.show = false
          }, this.duration === 0 ? '' : '')
        }
      }
    }
  }
}
</script>

