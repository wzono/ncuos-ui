<template>
  <transition name="us-notification-fade">
    <div
      :class="['us-notification', type === 'default' ? '' : `us-notification-${type}`, horizontalClass]"
      v-show="visible"
      :style="positionStyle"
      @mouseenter="clearTimer()"
      @mouseleave="startTimer()"
      @click="click"
      role="alert"
    >
      <i v-if="type !== 'default'" class="us-icon" :class="[
        customIcon,
        {'fa': customIcon === ''},
        {'fa-check-circle': type === 'success' & customIcon === ''},
        {'fa-info-circle': type === 'info' & customIcon === ''},
        {'fa-exclamation-circle': type === 'warning' & customIcon === ''},
        {'fa-times-circle': type === 'error' & customIcon === ''}, `us-icon-${type}`]">
      </i>
      <div class="us-notification__group">
        <h2 class="us-notification__title">
          {{ title }}
        </h2>
        <div class="us-notification__content" v-show="message">
          <slot>
            <p v-if="!dangerouslyUseHTMLString">{{ message }}</p>
            <p v-else v-html="message"></p>
          </slot>
        </div>
      </div>
      <div class="us-notification__control" v-if="showClose" @click.stop="close">&times;</div>
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
        title: '',
        message: '',
        duration: 3000,
        type: 'default',
        showClose: true,
        customIcon: '',
        onClose: null,
        onClick: null,
        closed: false,
        verticalOffset: 0,
        timer: null,
        dangerouslyUseHTMLString: false,
        position: 'top-right'
      }
    },
    computed: {
      typeClass() {
        return this.type && typeMap[this.type] ? `us-icon-${ typeMap[this.type] }` : ''
      },
      horizontalClass() {
        return this.position.indexOf('right') > -1 ? 'right' : 'left'
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