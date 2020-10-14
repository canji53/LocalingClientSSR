<template>
  <time class="newsDate">
    {{ publishedDate }}
  </time>
</template>

<script>
export default {
  props: {
    publishedDate: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.newsDate {
  line-height: $base-font-size;
  font-size: $base-font-size;
  color: $base-thin-color;

  // contents < 504px; // スマホ対応
  @include max-screen($column2-width) {
    line-height: $small-font-size;
    font-size: $small-font-size;
  }
}
</style>
