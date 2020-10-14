<template>
  <nuxt-link to="/" class="siteTitle">
    <h1>
      {{ title }}
    </h1>
  </nuxt-link>
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
.siteTitle {
  line-height: $large-font-size;

  & > h1 {
    line-height: $large-font-size;
    font-size: $large-font-size;
    color: $base-color;
  }

  @include max-screen($column3-width) {
    & > h1 {
      line-height: $medium-font-size;
      font-size: $medium-font-size;
    }
  }
}
</style>
