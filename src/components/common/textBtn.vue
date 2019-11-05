<template>
  <span class="textBtn" :style="{ color: color }">
    <slot></slot>
  </span>
</template>
<script>
export default {
  props: {
    color: {
      type: String,
      default: ""
    }
  },
  methods: {
    hanld() {
      this.$emit("click");
    }
  }
};
</script>
