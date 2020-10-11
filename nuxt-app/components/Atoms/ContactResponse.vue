<template>
  <p class="contactResponse">
    {{ response }}
  </p>
</template>

<script>
export default {
  props: {
    response: {
      type: String,
      required: false,
      default: "　",
    },
  },
}
</script>

<style lang="scss" scoped>
.contactResponse {
  line-height: $base-font-size;
  font-size: $base-font-size;
  color: orangered;
}
</style>
