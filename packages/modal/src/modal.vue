<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper" @click.self="$emit('close')">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header">
              <h3>标题</h3>
            </slot>
            <h3 class="close" @click="$emit('close')">&times;</h3>
          </div>
          <div class="modal-body">
            <slot name="body">
              模态框框体
            </slot>
          </div>
          <div class="modal-footer">
            <slot name="footer">
              <h6>默认Footer</h6>
              <button class="modal-default-button" @click="$emit('close')">
                OK
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
  name: 'us-modal'
}
</script>