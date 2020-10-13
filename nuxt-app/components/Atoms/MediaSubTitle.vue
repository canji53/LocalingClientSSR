<template>
  <a :href="canonical" :target="target" :rel="rel" class="mediaSubTitle">
    <h2>
      {{ subTitle }}
    </h2>
  </a>
</template>

<script>
export default {
  props: {
    subTitle: {
      type: String,
      required: false,
      default: "",
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
.mediaSubTitle {
  & > h2 {
    line-height: 16px;
    font-size: 16px;
    font-weight: normal;
    color: $base-color;
  }
}
</style>
