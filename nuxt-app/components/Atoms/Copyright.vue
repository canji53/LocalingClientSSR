<template>
  <section class="copyright">
    &copy;&nbsp;
    <span>
      {{ copyright }}
    </span>
  </section>
</template>

<script>
export default {
  props: {
    copyright: {
      type: String,
      require: true,
      default: "2020 ローカりんぐ",
    },
  },
}
</script>

<style lang="scss" scoped>
.copyright {
  font-size: 11px;
  line-height: 11px;
  color: $base-color;
}
</style>
