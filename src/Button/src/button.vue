<template>
    <button>
        {{msg}}
    </button>
</template>
<script>
export default {
  name: "Ncuosbutton",
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