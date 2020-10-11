<template>
  <h1 class="pageTitle">
    {{ title }}
  </h1>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: false,
      default: "ローカりんぐ",
    },
  },
}
</script>

<style lang="scss" scoped>
.pageTitle {
  line-height: $large-font-size;
  font-size: $large-font-size;
  color: $base-color;

  // contents < 504px; // スマホ対応
  @include max-screen($column2-width) {
    line-height: $medium-font-size;
    font-size: $medium-font-size;
  }
}
</style>
