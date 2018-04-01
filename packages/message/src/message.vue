<template>
  <transition name="us-messagebox">
    <div
      :class="['us-message', type === 'default' ? '' : `us-message-${type}`]"
      v-show="visible"
      :style="positionStyle"
      @mouseenter="clearTimer()"
      @mouseleave="startTimer()"
      @click="click"
    >
      <div class="us-message__group" :class="{ 'is-with-icon': typeClass || iconClass }">  
        <div class="us-message__content" v-show="message">
          <slot>
            <p>
              <i v-if="type !== 'default'" class="us-icon" :class="[
                customIcon,
                {'fa': customIcon === ''},
                {'fa-check-circle': type === 'success' & customIcon === ''},
                {'fa-info-circle': type === 'info' & customIcon === ''},
                {'fa-exclamation-circle': type === 'warning' & customIcon === ''},
                {'fa-times-circle': type === 'error' & customIcon === ''}, `us-icon-${type}`]">
              </i>
              <span>{{ message }}</span>
            </p>
          </slot>
        </div>
      </div>
      <span class="us-message__control" v-if="showClose" @click.stop="close">&times;</span>
    </div>
  </transition>
</template>

<script type="text/babel">
  let typeMap = {
    success: 'success',
    info: 'info',
    warning: 'warning',
    error: 'error'
  }
  export default {
    data() {
      return {
        visible: false,
        message: '',
        duration: 4500,
        type: 'default',
        showClose: true,
        customIcon: '',
        onClose: null,
        onClick: null,
        closed: false,
        verticalOffset: 0,
        timer: null,
        position: 'top-right'
      }
    },
    computed: {
      typeClass() {
        return this.type && typeMap[this.type] ? `us-icon-${ typeMap[this.type] }` : ''
      },
      verticalProperty() {
        return /^top-/.test(this.position) ? 'top' : 'bottom'
      },
      positionStyle() {
        return {
          [this.verticalProperty]: `${ this.verticalOffset }px`
        }
      }
    },
    watch: {
      closed(newVal) {
        if (newVal) {
          this.visible = false
          this.$el.addEventListener('transitionend', this.destroyElement)
        }
      }
    },
    methods: {
      destroyElement() {
        this.$el.removeEventListener('transitionend', this.destroyElement)
        this.$destroy(true)
        this.$el.parentNode.removeChild(this.$el)
      },
      click() {
        if (typeof this.onClick === 'function') {
          this.onClick()
        }
      },
      close() {
        this.closed = true
        if (typeof this.onClose === 'function') {
          this.onClose()
        }
      },
      clearTimer() {
        clearTimeout(this.timer)
      },
      startTimer() {
        if (this.duration > 0) {
          this.timer = setTimeout(() => {
            if (!this.closed) {
              this.close()
            }
          }, this.duration)
        }
      },
      keydown(e) {
        if (e.keyCode === 46 || e.keyCode === 8) {
          this.clearTimer() // detele 取消倒计时
        } else if (e.keyCode === 27) { // esc关闭消息
          if (!this.closed) {
            this.close()
          }
        } else {
          this.startTimer() // 恢复倒计时
        }
      }
    },
    mounted() {
      if (this.duration > 0) {
        this.timer = setTimeout(() => {
          if (!this.closed) {
            this.close()
          }
        }, this.duration)
      }
      document.addEventListener('keydown', this.keydown)
    },
    beforeDestroy() {
      document.removeEventListener('keydown', this.keydown)
    }
  }
</script>
