<template>
  <p class="newsDescription">
    {{ description }}
  </p>
</template>

<script>
export default {
  props: {
    description: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.newsDescription {
  font-size: $base-font-size;
  color: $base-color;

  // contents < 504px; // スマホ対応
  @include max-screen($column2-width) {
    font-size: $small-font-size;
  }
}
</style>
