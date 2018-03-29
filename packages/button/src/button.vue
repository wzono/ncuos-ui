<template>
  <button @click="$emit('click')" class="us-button" :disabled="disabled" :class="[
    'us-button--type-'+type,
    {'is-plain': plain, 'is-disabled': disabled ,'is-block':block,'is-round':round},
    'us-button--size-'+size
    ]">
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
    // 
    size: {
      type: String,
      default: "normal"
    },
    icon: {
      type: String,
      default: ""
    },
    plain: Boolean,
    disabled: Boolean,
    block:Boolean,
    round:Boolean
  },
  data() {
    return {};
  }
};
</script>