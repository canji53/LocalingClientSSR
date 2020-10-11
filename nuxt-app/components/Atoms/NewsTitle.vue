<template>
  <h1 class="newsTitle">
    {{ title }}
  </h1>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.newsTitle {
  line-height: $base-font-size;
  font-size: $base-font-size;
  color: $base-color;

  // contents < 504px; // スマホ対応
  @include max-screen($column2-width) {
    line-height: $small-font-size;
    font-size: $small-font-size;
  }
}
</style>
