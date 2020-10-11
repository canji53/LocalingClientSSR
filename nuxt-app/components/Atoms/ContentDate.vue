<template>
  <time class="contentDate">
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
.contentDate {
  line-height: 10px;
  font-size: 10px;
  color: $base-color;
}
</style>
