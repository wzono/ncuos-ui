<template>
  <button @click="$emit('click')" class="us-button" :disabled="disabled" :class="[
    'us-button--type-'+type,
    {'is-plain': plain, 'is-disabled': disabled ,'is-block':block,'only-icon':iconOnly},
    'us-button--size-'+size
    ]">
    <i v-if="icon !== 'default'" class="us-icon fa" :class="[icon]">
    </i>
    <slot>
    </slot>
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
      default: "default"
    },
    plain: Boolean,
    disabled: Boolean,
    block: Boolean,
    iconOnly:Boolean
  },
  data() {
    return {};
  }
};
</script>