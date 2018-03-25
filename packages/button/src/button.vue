<template>
  <button @click="$emit('click')" class="us-button" :disabled="disabled" :class="[
    'us-button--type-'+type,
    {'is-plain': plain, 'is-disabled': disabled},
    'us-button--size-'+size
    ]">
    <!-- <i v-if="icon !== ''" :class="icon"></i> -->
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: "us-button",
  props: {
    // default primary danger 
    type: {
      type: String,
      default: "default"
    },
    // small, normal, large	
    size: {
      type: String,
      default: "default"
    },
    icon: {
      type: String,
      default: ""
    },
    plain: Boolean,
    disabled: Boolean,
    round: Boolean
  },
  data() {
    return {
      msg: "button"
    };
  }
};
</script>