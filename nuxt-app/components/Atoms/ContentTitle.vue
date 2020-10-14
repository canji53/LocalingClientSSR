<template>
  <a :href="canonical" :target="target" :rel="rel" class="contentTitle">
    <h1>
      {{ title }}
    </h1>
  </a>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    canonical: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    target: "_blank",
    rel: "noopener",
  }),
}
</script>

<style lang="scss" scoped>
.contentTitle {
  & > h1 {
    line-height: 18px;
    font-size: 12px;
    color: $base-color;
  }
}
</style>
