<template>
  <a :href="canonical" :target="target" :rel="rel" class="mediaTitle">
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
.mediaTitle {
  & > h1 {
    line-height: 20px;
    font-size: 20px;
    color: $base-color;
  }
}
</style>
