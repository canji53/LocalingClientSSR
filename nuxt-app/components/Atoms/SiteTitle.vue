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
  line-height: 20px;

  & > h1 {
    line-height: 20px;
    font-size: 20px;
    color: $base-color;
  }
}
</style>
