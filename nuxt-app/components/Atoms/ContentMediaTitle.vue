<template>
  <a :href="mediaUrl" :target="target" :rel="rel" class="contentMediaTitle">
    <h1>
      {{ mediaTitle }}
    </h1>
  </a>
</template>

<script>
export default {
  props: {
    mediaTitle: {
      type: String,
      required: true,
    },
    mediaUrl: {
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
.contentMediaTitle {
  & > h1 {
    line-height: 12px;
    font-size: 12px;
    color: $base-color;
  }
}
</style>
