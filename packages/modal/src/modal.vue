<template>
  <transition name="us-modal">
    <div class="us-modal__mask">
      <div class="us-modal__wrapper" @click.self="$emit('close')">
        <div class="us-modal__container">
          <div class="us-modal__header">
            <slot name="header">
              标题
            </slot>
            <div class="us-modal__close" @click="$emit('close')">&times;</div>
          </div>
          <div class="us-modal__body">
            <slot name="body">
              <p>模态框内容</p>
              <p>模态框内容</p>
              <p>模态框内容</p>
            </slot>
          </div>
          <div class="us-modal__footer">
            <slot name="footer">
              <button @click="$emit('close')">
                取消
              </button>
              <button @click="$emit('close')">
                确定
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'us-modal',
  props: {
    title: {
      type: String,
      default: '标题'
    }
  }
}
</script>