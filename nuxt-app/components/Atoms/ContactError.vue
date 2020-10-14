<template>
  <p class="contactError">
    {{ error }}
  </p>
</template>

<script>
export default {
  props: {
    error: {
      type: String,
      required: false,
      default: "　",
    },
  },
}
</script>

<style lang="scss" scoped>
.contactError {
  line-height: $base-font-size;
  font-size: $base-font-size;
  color: orangered;
}
</style>
