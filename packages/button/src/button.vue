<template>
    <button>
        {{msg}}
    </button>
</template>
<script>
export default {
  name: "us-button",
  props: {
    type: {
      type: String,
      default: "default"
    },
  },
  data() {
    return {
      msg: "i'm a button"
    };
  }
};
</script>