<template>
  <button @click="$emit('click')" class="us-button" :disabled="disabled" :class="[
    'us-button--type-'+type,
    {'is-plain': checkPlain, 'is-disabled': disabled},
    'us-button--size-'+size
    ]">
    <!-- 在考虑是否要控制折行 -->
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
      default: "normal"
    },
    icon: {
      type: String,
      default: ""
    },
    plain:{
      type:Boolean
    },
    disabled: Boolean,
  },
  computed:{
  checkPlain(){
    return this.plain
  }    
  },
  data() {

  }
};
</script>